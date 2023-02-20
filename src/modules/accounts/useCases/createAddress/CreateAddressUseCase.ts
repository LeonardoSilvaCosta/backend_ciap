import { Address } from "@prisma/client";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../repositories/IAddressRepository";

export class CreateAddressUseCase {
  constructor(
    private addressRepository: IAddressRepository,
  ) { }

  async execute({ fkUser, address }: ICreateAddressDTO): Promise<Address> {

    return await this.addressRepository.create({ fkUser, address });

  }
}