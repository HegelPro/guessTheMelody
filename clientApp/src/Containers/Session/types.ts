import { IAccount } from "../Login/types";

export interface ISession {
  isAuth: boolean
  account?: IAccount
}