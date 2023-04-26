import { Request, Response } from "express";
import { GenderRepository } from "../../repositories/implementations/GenderRepository";
import { CreateGenderUseCase } from "./CreateGenderUseCase";

export class CreateGenderController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createGenderUseCase = new CreateGenderUseCase(new GenderRepository);
    const { name } = request.body;

    const createGender = await createGenderUseCase.execute(name)

    return response.status(201).json(createGender);
  }
}