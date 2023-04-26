import { Request, Response } from "express";
import { ListBoardsUseCase } from "./ListBoardsUseCase";
import { BoardRepository } from "../../repositories/implementations/BoardRepository";


export class ListBoardsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listBoardsUseCase = new ListBoardsUseCase(new BoardRepository);

    const all = await listBoardsUseCase.execute();

    return response.json(all);
  }
}