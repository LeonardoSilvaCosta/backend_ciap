import { Address, EducationLevel, Employee, Gender, MaritalStatus, UpdateInformation } from "@prisma/client";

export interface ICreateUserDTO {
  fullname: string,
  birthdate?: Date,
  cpf?: string,
  gender: Gender,
  email?: string,
  address?: Address,
  maritalStatus?: MaritalStatus,
  educationLevel?: EducationLevel
  birthplace?: string,
  createdAt: Date
  registrant: Employee
  updateInformation: UpdateInformation
  password?: string
}