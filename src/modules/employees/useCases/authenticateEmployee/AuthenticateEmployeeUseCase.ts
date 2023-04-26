import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';

interface IRequest {
  email: string,
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string | null
  },
  token: string,
}

export class AuthenticateEmployeeUseCase {
  constructor(
    private userRepository: IEmployeeRepository) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {

    const employee = await this.userRepository.findByEmail(email);

    if (!employee) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, employee.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "36167ff97a72db6e8e4ada9823d96c03", {
      subject: String(employee.id),
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: employee.fullname,
        email: employee.email
      },
      token
    }

    return tokenReturn
  }
}