import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";


export class GetCurrentUserUseCase {
  constructor(
    private userRepository: IUserRepository) { }

  async execute(user_id: string): Promise<User | null> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found.")
    }


    return user;

  }

}