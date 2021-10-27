import { Document } from "mongoose";

export interface iTweet extends Document {
  content: string;
  author: string;
}
