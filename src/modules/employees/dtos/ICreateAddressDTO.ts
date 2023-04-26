import { ICreateAddressRequestDTO } from "./ICreateAddressRequestDTO";

export interface ICreateAddressDTO {
  employee_id: string,
  address: ICreateAddressRequestDTO
}