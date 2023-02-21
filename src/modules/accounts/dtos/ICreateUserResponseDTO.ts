import { Address } from "@prisma/client";

export interface ICreateUserResponseDTO {
    fullname: string,
    birthdate: Date | null,
    cpf: string | null,
    gender: string | null,
    first_phone: string,
    email: string | null,
    address?: Address,
    marital_status: string | null,
    education_level: string | null,
    number_of_children: number | null,
    birthplace: string | null,
    registrant_id: string | null,
    created_at: Date,
}