"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    dbUrl: "mongodb+srv://florent:ycF4El4iR1uvBciT@cluster0.bgnw6.mongodb.net/mini_twitter?retryWrites=true&w=majority",
    cert: path_1.default.join(__dirname, "../../ssl/local.crt"),
    key: path_1.default.join(__dirname, "../../ssl/local.key"),
    portHttp: 3000,
    portHttps: 3001,
};
//# sourceMappingURL=development.js.map