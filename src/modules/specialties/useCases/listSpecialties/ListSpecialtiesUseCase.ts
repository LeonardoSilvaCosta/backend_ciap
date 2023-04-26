import { Specialty } from "@prisma/client";
import { ISpecialtyRepository } from "../../repositories/ISpecialtyRepository";


export class ListSpecialtiesUseCase {

  constructor(
    private specialtyRepository: ISpecialtyRepository,
  ) { }

  async execute(): Promise<Specialty[]> {
    const specialties = await this.specialtyRepository.list();

    return specialties
  }

}