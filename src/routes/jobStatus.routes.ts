import { Router } from 'express';
import { CreateJobStatusController } from '../modules/jobStatus/useCases/createJobStatus/CreateJobStatusController';

export const jobStatusRoutes = Router();

const createJobStatusController = new CreateJobStatusController();

jobStatusRoutes.post("/", createJobStatusController.handle);