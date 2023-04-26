import { Request, Response } from "express";
import { ListRanksUseCase } from "./ListRanksUseCase";
import { RankRepository } from "../../repositories/implementations/RankRepository";


export class ListRanksController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listRanksUseCase = new ListRanksUseCase(new RankRepository);

    const all = await listRanksUseCase.execute();

    return response.json(all);
  }
}