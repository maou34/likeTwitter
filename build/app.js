"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const errorhandler_1 = __importDefault(require("errorhandler"));
require("./database");
exports.app = (0, express_1.default)();
exports.app.set("views", path_1.default.join(__dirname, "../views"));
exports.app.set("view engine", "pug");
require("./config/session.config");
require("./config/passport.config");
exports.app.use((0, morgan_1.default)("short"));
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(routes_1.default);
if (process.env.NODE_ENV === "development") {
    exports.app.use((0, errorhandler_1.default)());
}
else {
    exports.app.use((err, _, res) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message,
        });
    });
}
//# sourceMappingURL=app.js.map