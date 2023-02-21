import { IGetUserResponseDTO } from '../../dtos/IGetUserResponseDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

export class ListUsersUseCase {

  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(): Promise<IGetUserResponseDTO[]> {
    const users = await this.userRepository.list();

    return users
  }

}