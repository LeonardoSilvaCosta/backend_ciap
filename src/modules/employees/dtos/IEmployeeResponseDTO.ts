import { AdministrativeRole, Board, EducationLevel, EmployeeAddress, Gender, JobStatus, MaritalStatus, Rank, Specialty, Unit } from "@prisma/client";

export interface IEmployeeResponseDTO {
    id?: string,
    avatar: string | null,
    fullname: string,
    birthdate: Date,
    cpf: string,
    gender: Gender,
    email: string,
    address: EmployeeAddress | null,
    marital_status: MaritalStatus,
    education_level: EducationLevel
    number_of_children: number,
    birthplace: string,
    code_name: string,
    unit: Unit,
    administrative_role?: AdministrativeRole | null,
    job_status: JobStatus,
    military_id: string | null,
    rank: Rank | null,
    board: Board| null,
    specialty: Specialty | null,
    created_at: Date,
    created_by?: string | null,
}