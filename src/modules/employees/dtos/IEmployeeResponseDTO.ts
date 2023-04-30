import { EmployeeAddress } from "@prisma/client";

export interface IEmployeeResponseDTO {
    id?: string,
    avatar: string | null,
    fullname: string,
    birthdate: Date,
    cpf: string,
    gender: string,
    email: string,
    phones?: string[],
    address?: EmployeeAddress | null,
    marital_status: string,
    education_level: string
    number_of_children: number,
    birthplace: string,
    code_name: string,
    unit: string,
    administrative_role?: string | null,
    job_status: string,
    military_id: string | null,
    rank?: string | null,
    board?: string| null,
    specialty?: string | null,
    created_at: Date,
    created_by?: string | null,
}