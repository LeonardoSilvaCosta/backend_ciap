import { Address } from "@prisma/client";

export interface ICreateUserResponseDTO {
    id: string,
    fullname: string,
    first_phone: string,
    birthdate: Date | null,
    cpf: string | null,
    gender_id: string | null,
    email: string | null,
    address?: Address,
    marital_status_id: string | null,
    education_level_id: string | null,
    number_of_children: number | null,
    birthplace: string | null,
    registrant_id: string | null,
    created_at: Date,
}