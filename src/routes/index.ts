import { Request, Response, Router } from "express";
import tweets from "./tweets.routes";
import users from "./users.routes";
import auth from "./auth.routes";
import { ensureAuthenticated } from "../config/guards.config";

const router = Router();

router.use("/tweets", ensureAuthenticated, tweets);
router.use("/users", users);
router.use("/auth", auth);

router.get("/", (_req: Request, res: Response) => {
  res.redirect("/tweets");
});

export default router;
