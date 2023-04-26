import { Request, Response } from "express";
import { CreateBoardUseCase } from "./CreateBoardUseCase";
import { BoardRepository } from "../../repositories/implementations/BoardRepository";

export class CreateBoardController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createBoardUseCase = new CreateBoardUseCase(new BoardRepository);
    const { name } = request.body;

    const createBoard = await createBoardUseCase.execute(name)

    return response.status(201).json(createBoard);
  }
}