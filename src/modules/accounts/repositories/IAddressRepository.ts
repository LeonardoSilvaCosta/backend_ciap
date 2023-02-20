import { Address } from "@prisma/client";
import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";

export interface IAddressRepository {
  create({ fkUser, address: { postal_code, number } }: ICreateAddressDTO): Promise<Address>;
  findById(id: string): Promise<Address | null>;
  list(): Promise<Address[]>;
}