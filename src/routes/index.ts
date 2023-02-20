import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { currentUserRoutes } from './currentUser.routes';
import { educationLevelsRoutes } from './educationLevels.routes';
import { gendersRoutes } from './genders.routes';
import { maritalStatusRoutes } from './maritalStatus.routes';
import { usersRoutes } from './users.routes';

export const router = Router()

router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/me", currentUserRoutes);
router.use("/genders", gendersRoutes);
router.use("/maritalStatus", maritalStatusRoutes);
router.use("/educationLevels", educationLevelsRoutes);