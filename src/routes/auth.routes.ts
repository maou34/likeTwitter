import { Router } from "express";
import { signinForm, signin, logout } from "../controllers/auth.controller";

const router = Router();

router.get("/signin/form", signinForm);
router.post("/signin", signin);
router.get("/logout", logout);

export default router;
