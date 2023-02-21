import { IListUserResponseDTO } from '../../dtos/IListUserResponseDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

export class ListUsersUseCase {

  constructor(
    private userRepository: IUserRepository,
  ) { }

  async execute(): Promise<IListUserResponseDTO[]> {
    const users = await this.userRepository.list();

    return users
  }

}