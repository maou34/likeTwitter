import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";
import { iUser } from "../../interfaces";
// import { IUser } from "../../interfaces/user.interface";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  firstname: { type: String },
  lastname: { type: String },
  dateOfBirth: { type: Date },
  avatar: { type: String, default: "/images/default-profile.svg" },
  following: { type: [Schema.Types.ObjectId], ref: "user" },
  products: { type: [Schema.Types.ObjectId], ref: "product" },
});

userSchema.statics.hashPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

interface iUserModel extends Model<iUser> {
  hashPassword: (password: string) => string;
}

export const User = model<iUser, iUserModel>("user", userSchema);
