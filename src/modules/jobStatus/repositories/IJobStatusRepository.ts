import { JobStatus } from "@prisma/client";

export interface IJobStatusRepository {
  create(employee_id: string, name: string): Promise<JobStatus>;
  findById(id: string): Promise<JobStatus | null>;
  findByName(name: string): Promise<JobStatus | null>;
  list(): Promise<JobStatus[]>;
}