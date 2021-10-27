import { Document } from "mongoose";

export interface iUser extends Document {
  username: string;
  local: iUserLocal;
  avatar?: string;
  firstname?: string;
  lastname?: string;
  dateOfBirth?: Date;
  products?: string[];
  following?: string[];
  comparePassword: (
    password: string,
    hashedPassword: string
  ) => Promise<boolean>;
}

export interface iUserLocal {
  email: string;
  password: string;
}

export interface UserForm {
  username: string;
  email: string;
  password: string;
}

/*
export interface iProduct {
  name: string;
  price: number;
  image?: string;
  description: string;
}
*/
