import { Board } from "@prisma/client";
import { IBoardRepository } from "../../repositories/IBoardRepository";


export class ListBoardsUseCase {

  constructor(
    private boardRepository: IBoardRepository,
  ) { }

  async execute(): Promise<Board[]> {
    const boards = await this.boardRepository.list();

    return boards
  }

}