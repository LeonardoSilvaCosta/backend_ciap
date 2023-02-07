import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string,
}

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "36167ff97a72db6e8e4ada9823d96c03", {
      subject: String(user.id),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }

    return tokenReturn
  }
}