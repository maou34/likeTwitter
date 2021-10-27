import { Router } from "express";

import { ensureAuthenticated } from "../config/guards.config";
import {
  signup,
  signupForm,
  uploadImage,
  userProfile,
  userList,
  followUser,
  unFollowUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", userList);
router.get("/:username", userProfile);
router.post("/signup", signup);
router.get("/signup/form", signupForm);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unFollowUser);
router.post("/update/image", ensureAuthenticated, uploadImage);

export default router;
