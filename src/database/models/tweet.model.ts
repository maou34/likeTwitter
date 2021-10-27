import { Schema, model } from "mongoose";

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      maxLength: [140, "Tweet trop long"],
      minLength: [5, "Tweet trop court"],
      required: [true, "Veuillez saisir un texte"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Tweet = model("tweet", tweetSchema);
