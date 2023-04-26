import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { AppError } from "../errors/AppError";
import { EmployeeRepository } from "../modules/employees/repositories/implementations/EmployeeRepository";

interface IPayload {
  sub: string,
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing.", 401)
  }

  const [, token] = authHeader.split(" ");


  try {
    const { sub: employee_id } = verify(token, "36167ff97a72db6e8e4ada9823d96c03") as IPayload;

    const usersRepository = new EmployeeRepository();

    const user = await usersRepository.findById(employee_id);

    if (!user) {
      throw new AppError("User does not exists!")
    }

    request.employee = {
      id: employee_id,
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}