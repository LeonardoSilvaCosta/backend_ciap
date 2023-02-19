import { AppError } from "../../../../errors/AppError";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

interface currentUserResponse {
  name: string,
  email: string
}

export class GetCurrentUserUseCase {
  constructor(
    private userRepository: IEmployeeRepository) { }

  async execute(user_id: string): Promise<currentUserResponse | null> {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found.")
    }


    return {
      name: user.name,
      email: user.email
    };

  }

}