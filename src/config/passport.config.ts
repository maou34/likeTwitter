import passport from "passport";
import passportLocal from "passport-local";
import { app } from "../app";
import { iUser } from "../interfaces";
import { findUserPerEmail, findUserPerId } from "../queries/users.queries";

const LocalStrategy = passportLocal.Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: iUser, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await findUserPerId(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await findUserPerEmail(email);
        if (user) {
          const match = await user.comparePassword(
            password,
            user.local.password
          );
          if (match) {
            done(null, user);
          } else {
            done(null, false, {
              message: "identifiant ou mot de passe incorrect",
            });
          }
        } else {
          done(null, false, {
            message: "identifiant ou mot de passe incorrect",
          });
        }
      } catch (error) {
        done(error);
      }
    }
  )
);
