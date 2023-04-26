import { Request, Response } from "express";
import { CreateRankUseCase } from "./CreateRankUseCase";
import { RankRepository } from "../../../employees/repositories/implementations/RankRepository";

export class CreateRankController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createRankUseCase = new CreateRankUseCase(new RankRepository);
    const { name } = request.body;

    const createRank = await createRankUseCase.execute(employee_id, name)

    return response.status(201).json(createRank);
  }
}