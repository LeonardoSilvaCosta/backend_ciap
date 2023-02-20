import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface currentUserResponse {
  name: string,
  email: string | null
}

export class GetCurrentUserUseCase {
  constructor(
    private userRepository: IUserRepository) { }

  async execute(user_id: string): Promise<currentUserResponse | null> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found.")
    }


    return {
      name: user.fullname,
      email: user.email
    };

  }

}