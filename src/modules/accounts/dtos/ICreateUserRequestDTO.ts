import { Address, EducationLevel, Employee, Gender, MaritalStatus, UpdateInformation } from "@prisma/client";

export interface ICreateUserRequestDTO {
  fullname: string,
  birthdate?: Date,
  cpf?: string,
  gender: number,
  email?: string,
  address?: Address,
  maritalStatus?: number,
  educationLevel?: number
  birthplace?: string,
  createdAt: Date
  registrant: number
  password?: string
}