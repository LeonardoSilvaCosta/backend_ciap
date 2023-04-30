
export interface ICreateEmployeeAddressRequestDTO {
  employee_id: string,
  address: {
    postal_code: string,
    number: string
  }
}