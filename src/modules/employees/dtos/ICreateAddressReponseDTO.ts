import { ICreateAddressRequestDTO } from "./ICreateAddressRequestDTO";

export interface ICreateEmployeeAddressDTO {
  employee_id: string,
  address: {
    postal_code: string,
    number: string
  }
}