"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const app_1 = require("../app");
const users_queries_1 = require("../queries/users.queries");
const LocalStrategy = passport_local_1.default.Strategy;
app_1.app.use(passport_1.default.initialize());
app_1.app.use(passport_1.default.session());
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await (0, users_queries_1.findUserPerId)(id);
        done(null, user);
    }
    catch (error) {
        done(error);
    }
});
passport_1.default.use("local", new LocalStrategy({
    usernameField: "email",
}, async (email, password, done) => {
    try {
        const user = await (0, users_queries_1.findUserPerEmail)(email);
        if (user) {
            const match = await user.comparePassword(password, user.local.password);
            if (match) {
                done(null, user);
            }
            else {
                done(null, false, {
                    message: "identifiant ou mot de passe incorrect",
                });
            }
        }
        else {
            done(null, false, {
                message: "identifiant ou mot de passe incorrect",
            });
        }
    }
    catch (error) {
        done(error);
    }
}));
//# sourceMappingURL=passport.config.js.map