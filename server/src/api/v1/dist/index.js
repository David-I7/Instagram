"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const pathConstants_1 = require("./config/pathConstants");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const verifyJWT_1 = __importDefault(require("./middlewares/verifyJWT"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const verifyRoles_1 = __importDefault(require("./middlewares/verifyRoles"));
const roles_1 = __importDefault(require("./config/roles"));
require("./config/allowEnv");
(0, connectDB_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(pathConstants_1.clientAssets));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(corsOptions_1.default);
const register_1 = __importDefault(require("./routes/register"));
app.use("/register", register_1.default);
const auth_1 = __importDefault(require("./routes/auth"));
app.use("/auth", auth_1.default);
const validate_1 = __importDefault(require("./routes/validate"));
app.use("/validate", validate_1.default);
const refresh_1 = __importDefault(require("./routes/refresh"));
app.use("/refresh", refresh_1.default);
const oAuth_1 = __importDefault(require("./routes/oAuth"));
app.use("/oauth", oAuth_1.default);
app.get("/", (req, res) => {
    res.sendFile(pathConstants_1.clientIndex);
});
app.get("/hello", (req, res) => {
    res.send("success");
});
const testroute_1 = __importDefault(require("./routes/testroute"));
app.use("/test", verifyJWT_1.default, (0, verifyRoles_1.default)(roles_1.default.verifiedUser, roles_1.default.admin), testroute_1.default);
app.all("*", (req, res) => {
    res
        .status(404)
        .send(`The url ${new URL(req.url, `http://${req.headers.host}`)} is not a resource available on our server`);
});
mongoose_1.default.connection.once("open", () => {
    console.log("connected to DB");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
