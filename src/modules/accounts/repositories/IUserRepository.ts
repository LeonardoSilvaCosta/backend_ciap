import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(email: string) : Promise<User | null>;
  findByFullNameAndPhone(fullname: string, firstPhone: string ) : Promise<User | null>;
  findById(id: string): Promise<User | null>;
  list(): Promise<User[]>;
}