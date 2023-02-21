import { AppError } from "../../../../errors/AppError";
import { IGetUserResponseDTO } from "../../dtos/IGetUserResponseDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetCurrentUserUseCase {
  constructor(
    private userRepository: IUserRepository) { }

  async execute(user_id: string): Promise<IGetUserResponseDTO | null> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found.")
    }


    return user;

  }

}