
export interface ICreateUserDTO {
  fullname: string,
  firstPhone: string,
  birthdate?: Date,
  cpf?: string,
  genderId: string,
  email?: string,
  maritalStatusId?: string,
  educationLevelId?: string,
  numberOfChildren?: number,
  birthplace?: string,
  registrantId?: string
  password: string,
  createdAt: Date,
}