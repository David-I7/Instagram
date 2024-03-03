"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "..", "..", "..", "..", "frontEnd", "dist")));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "..", "..", "..", "frontEnd", "dist", "index.html"));
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
