"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweets_routes_1 = __importDefault(require("./tweets.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const guards_config_1 = require("../config/guards.config");
const router = (0, express_1.Router)();
router.use("/tweets", guards_config_1.ensureAuthenticated, tweets_routes_1.default);
router.use("/users", users_routes_1.default);
router.use("/auth", auth_routes_1.default);
router.get("/", (_req, res) => {
    res.redirect("/tweets");
});
exports.default = router;
//# sourceMappingURL=index.js.map