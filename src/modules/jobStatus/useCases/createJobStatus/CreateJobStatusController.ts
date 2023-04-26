import { Request, Response } from "express";
import { CreateJobStatusUseCase } from "./CreateJobStatusUseCase";
import { JobStatusRepository } from "../../repositories/implementations/JobStatusRepository";

export class CreateJobStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createJobStatusUseCase = new CreateJobStatusUseCase(new JobStatusRepository);
    const { name } = request.body;

    const createJobStatus = await createJobStatusUseCase.execute(name)

    return response.status(201).json(createJobStatus);
  }
}