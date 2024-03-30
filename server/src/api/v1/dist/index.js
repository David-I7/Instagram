"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const pathConstants_1 = require("./config/pathConstants");
(0, connectDB_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(pathConstants_1.clientAssets));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const register_1 = __importDefault(require("./routes/register"));
app.use("/register", register_1.default);
const auth_1 = __importDefault(require("./routes/auth"));
app.use("/auth", auth_1.default);
app.get("/", (req, res) => {
    res.sendFile(pathConstants_1.clientIndex);
});
app.all("*", (req, res) => {
    res.status(404).send("This route does not exist");
});
mongoose_1.default.connection.once("open", () => {
    console.log("connected to DB");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
