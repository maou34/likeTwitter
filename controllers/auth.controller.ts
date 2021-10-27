import { NextFunction, Request, Response } from "express";
import passport from "passport";

exports.signInForm = (req: Request, res: Response, _next: NextFunction) => {
  res.render("auth/auth-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.signin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) {
      next(error);
    } else if (!user) {
      res.render("auth/auth-form", {
        errors: [info.message],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
    } else {
      req.login(user, (error) => {
        if (error) {
          next(error);
        } else {
          res.redirect("/tweets");
        }
      });
    }
  })(req, res, next);
};

exports.logout = (req: Request, res: Response, _next: NextFunction) => {
  req.logout();
  res.redirect("/auth/signin/form");
};
