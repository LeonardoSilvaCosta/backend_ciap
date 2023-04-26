import { Request, Response } from "express";
import { CreateJobStatusUseCase } from "./CreateJobStatusUseCase";
import { JobStatusRepository } from "../../../employees/repositories/implementations/JobStatusRepository";

export class CreateJobStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createJobStatusUseCase = new CreateJobStatusUseCase(new JobStatusRepository);
    const { name } = request.body;

    const createJobStatus = await createJobStatusUseCase.execute(employee_id, name)

    return response.status(201).json(createJobStatus);
  }
}