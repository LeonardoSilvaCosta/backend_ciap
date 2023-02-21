
export interface IGetUserResponseDTO {
    id: string,
    fullname: string,
    firstPhone: string,
    birthdate: Date | null,
    cpf: string | null,
    email: string | null,
    numberOfChildren: number | null,
    birthplace: string | null,
    createdAt: Date,
    Gender: { name: string } | null,
    Address: {
        postalCode: string,
        number: number,
    } | null,
    MaritalStatus: { name: string } | null,
    EducationLevel: { name: string } | null,
    Registrant: { userId: string } | null,
    Phone: { telefone: string }[] | null,
    UpdateInformation?: {
        createdAt: string,
        employeeId: string
    }[],
}