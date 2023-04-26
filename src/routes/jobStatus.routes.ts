import { Router } from 'express';
import { CreateJobStatusController } from '../modules/jobStatus/useCases/createJobStatus/CreateJobStatusController';
import { ListJobStatusController } from '../modules/jobStatus/useCases/listJobStatus/ListJobStatusController';

export const jobStatusRoutes = Router();

const createJobStatusController = new CreateJobStatusController();
const listJobStatusController = new ListJobStatusController();

jobStatusRoutes.post("/", createJobStatusController.handle);
jobStatusRoutes.get("/", listJobStatusController.handle);
