import { Prisma } from "@prisma/client";
import { IEmployeePhoneRepository } from "../../repositories/IEmployeePhoneRepository";
import { ICreatePhoneDTO } from "../../dtos/ICreatePhoneDTO";

export class CreateEmployeePhoneUseCase {
  constructor(
    private employeePhoneRepository: IEmployeePhoneRepository,
  ) { }

  async execute(phonesToSave: ICreatePhoneDTO[]): Promise<Prisma.BatchPayload> {

    return await this.employeePhoneRepository.create(phonesToSave);

  }
}