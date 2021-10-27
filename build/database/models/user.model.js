"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    local: {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    firstname: { type: String },
    lastname: { type: String },
    dateOfBirth: { type: Date },
    avatar: { type: String, default: "/images/default-profile.svg" },
    following: { type: [mongoose_1.Schema.Types.ObjectId], ref: "user" },
    products: { type: [mongoose_1.Schema.Types.ObjectId], ref: "product" },
});
userSchema.statics.hashPassword = (password) => {
    return bcrypt_1.default.hash(password, 12);
};
userSchema.methods.comparePassword = (password, hashedPassword) => {
    return bcrypt_1.default.compare(password, hashedPassword);
};
exports.User = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.model.js.map