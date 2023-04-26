import { prisma } from '../../../../prisma';
import { JobStatus, Unit } from "@prisma/client";
import { IJobStatusRepository } from '../IJobStatusRepository';

export class JobStatusRepository implements IJobStatusRepository {

  async create(employee_id: string, name: string): Promise<JobStatus> {
    return await prisma.jobStatus.create({
      data: {
        name,
        createdAt: new Date(),
        createdBy:employee_id 
      }
    })
  }

  async findById(id: string): Promise<JobStatus | null> {
    const job_status = await prisma.jobStatus.findUnique({
      where: { id }
    })

    return job_status;
  }

  async findByName(name: string): Promise<JobStatus | null> {
    const job_status = await prisma.unit.findUnique({
      where: { name }
    })

    return job_status;
  }

  async list(): Promise<JobStatus[]> {
    return await prisma.jobStatus.findMany();
  }

}