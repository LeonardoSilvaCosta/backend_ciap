import { Request, Response } from "express";
import { JobStatusRepository } from "../../repositories/implementations/JobStatusRepository";
import { ListJobStatusUseCase } from "./ListJobStatusUseCase";



export class ListJobStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listJobStatusUseCase = new ListJobStatusUseCase(new JobStatusRepository);

    const all = await listJobStatusUseCase.execute();

    return response.json(all);
  }
}