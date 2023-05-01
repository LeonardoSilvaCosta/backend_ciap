import { IClientAddressDTO } from "./IClientAddressResponseDTO"

export interface IUpdateClientRequestDTO {
  avatar?: string,
  fullname: string,
  birthdate: Date,
  gender_id: string,
  oldPhones?: string[],
  newPhones?: string[],
  address?: IClientAddressDTO,
  marital_status_id: string,
  education_level_id: string
  number_of_children: number,
  birthplace: string,
  code_name: string,
  unit_id: string,
  administrative_role_id?: string,
  job_status_id: string,
  military_id: string,
  rank_id?: string,
  board_id?: string,
  policy_holder_id?: string | null,
  type_of_bound_id?: string |null
}