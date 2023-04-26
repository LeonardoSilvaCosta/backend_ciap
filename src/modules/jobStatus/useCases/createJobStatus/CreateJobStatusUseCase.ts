import { JobStatus } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IJobStatusRepository } from "../../repositories/IJobStatusRepository";

export class CreateJobStatusUseCase {
  constructor(
    private jobStatusRepository: IJobStatusRepository,
  ) { }

  async execute(employee_id: string, name: string): Promise<JobStatus> {

    const jobStatusAlreadyExists = await this.jobStatusRepository.findByName(name);

    if (jobStatusAlreadyExists) {
      throw new AppError("Job Status already exists.")
    };

    return await this.jobStatusRepository.create(name, employee_id);

  }
}