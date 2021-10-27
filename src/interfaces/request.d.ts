import { iUser } from ".";

declare global {
  declare namespace Express {
    interface User extends iUser {}
  }
}
