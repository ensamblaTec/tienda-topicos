import { IPayment } from "./IPayment.interface";
import { IAddress } from "./IAddress.interface";
import { status } from "../../controller/types";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  telephone: string;
  last_login?: Date;
  birth: Date;
  gender: CharacterData;
  status?: status;
  payment?: IPayment;
  address?: IAddress;
  created_at: Date;
  updated_at?: Date;
}
