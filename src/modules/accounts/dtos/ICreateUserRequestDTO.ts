import { ICreateAddressRequestDTO } from "./ICreateAddressRequestDTO"

export interface ICreateUserRequestDTO {
  fullname: string,
  birthdate?: Date,
  cpf?: string,
  gender_id: string,
  first_phone: string,
  email?: string,
  address: ICreateAddressRequestDTO,
  marital_status_id?: string,
  education_level_id?: string
  number_of_children?: number,
  birthplace?: string,
  registrant_id?: string
  password?: string
}