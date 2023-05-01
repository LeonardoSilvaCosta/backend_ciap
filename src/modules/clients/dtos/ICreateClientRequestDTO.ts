import { ICreateClientAddressRequestDTO } from "./ICreateClientAddressRequestDTO"

export interface ICreateClientRequestDTO {
  id?: string,
  avatar?: string,
  fullname: string,
  birthdate?: Date,
  cpf?: string,
  gender_id: string,
  email?: string,
  phones?: string[],
  address?: ICreateClientAddressRequestDTO,
  marital_status_id?: string,
  education_level_id?: string
  number_of_children?: number,
  birthplace?: string,
  code_name?: string,
  unit_id?: string,
  administrative_role_id?: string,
  job_status_id?: string,
  military_id?: string,
  rank_id?: string,
  board_id?: string,
  policy_holder_id?: string | null,
  type_of_bound_id?: string | null,
  created_by: string,
}