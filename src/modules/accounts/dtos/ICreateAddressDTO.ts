import { ICreateAddressRequestDTO } from "./ICreateAddressRequestDTO";

export interface ICreateAddressDTO {
  fkUser: string,
  address: ICreateAddressRequestDTO
}