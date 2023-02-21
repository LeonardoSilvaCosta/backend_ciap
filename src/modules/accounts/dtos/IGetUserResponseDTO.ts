
export interface IGetUserResponseDTO {
    id: string,
    fullname: string,
    firstPhone: string,
    birthdate: Date | null,
    cpf: string | null,
    gender: { name: string } | null,
    email: string | null,
    address: {
        postalCode: string,
        number: number,
    } | null,
    marital_status: { name: string } | null,
    education_level: { name: string } | null,
    number_of_children: number | null,
    birthplace: string | null,
    registrant_id: { userId: string } | null,
    phones: { phone: string }[] | null,
    created_at: Date,
    update_information?: {
        created_at: string,
        employee_id: string
    }[],
}