import { Board } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IBoardRepository } from "../../repositories/IBoardRepository";

export class CreateBoardUseCase {
  constructor(
    private boardRepository: IBoardRepository,
  ) { }

  async execute(name: string): Promise<Board> {

    const boardAlreadyExists = await this.boardRepository.findByName(name);

    if (boardAlreadyExists) {
      throw new AppError("Board already exists.")
    };

    return await this.boardRepository.create(name);

  }
}