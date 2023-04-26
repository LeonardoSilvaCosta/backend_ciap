import { JobStatus } from "@prisma/client";

export interface IJobStatusRepository {
  create(name: string): Promise<JobStatus>;
  findById(id: string): Promise<JobStatus | null>;
  findByName(name: string): Promise<JobStatus | null>;
  list(): Promise<JobStatus[]>;
}