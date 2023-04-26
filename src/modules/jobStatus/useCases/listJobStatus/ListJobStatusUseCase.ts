import { JobStatus } from "@prisma/client";
import { IJobStatusRepository } from "../../repositories/IJobStatusRepository";


export class ListJobStatusUseCase {

  constructor(
    private jobStatusRepository: IJobStatusRepository,
  ) { }

  async execute(): Promise<JobStatus[]> {
    const jobStatus = await this.jobStatusRepository.list();

    return jobStatus
  }

}