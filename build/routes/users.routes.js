"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guards_config_1 = require("../config/guards.config");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get("/", users_controller_1.userList);
router.get("/:username", users_controller_1.userProfile);
router.post("/signup", users_controller_1.signup);
router.get("/signup/form", users_controller_1.signupForm);
router.get("/follow/:userId", users_controller_1.followUser);
router.get("/unfollow/:userId", users_controller_1.unFollowUser);
router.post("/update/image", guards_config_1.ensureAuthenticated, users_controller_1.uploadImage);
exports.default = router;
//# sourceMappingURL=users.routes.js.map