import { Address, EducationLevel, Employee, Gender, MaritalStatus } from "@prisma/client";

export interface ICreateUserResponseDTO {
    fullname: string,
    birthdate: Date | null,
    cpf: string | null,
    gender: Gender | null,
    first_phone: string,
    email: string | null,
    address?: Address,
    marital_status: MaritalStatus | null,
    education_level: EducationLevel | null,
    number_of_children: number | null,
    birthplace: string | null,
    registrant_id: Employee | null,
    created_at: Date,
}