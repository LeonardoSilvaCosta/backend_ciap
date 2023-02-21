import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IGetUserResponseDTO } from "../dtos/IGetUserResponseDTO";

export interface IUserRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findByEmail(email: string) : Promise<User | null>;
  findByFullNameAndPhone(fullname: string, firstPhone: string ) : Promise<User | null>;
  findById(id: string): Promise<IGetUserResponseDTO | null>;
  list(): Promise<IGetUserResponseDTO[]>;
}