import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { educationLevelsRoutes } from './educationLevels.routes';
import { gendersRoutes } from './genders.routes';
import { maritalStatusRoutes } from './maritalStatus.routes';
import { currentEmployeeRoutes } from './currentEmployee.routes';
import { employeeRoutes } from './employee.routes';
import { unitsRoutes } from './units.routes';
import { administrativeRolesRoutes } from './administrativeRoles.routes';
import { jobStatusRoutes } from './jobStatus.routes';
import { boardsRoutes } from './boards.routes';
import { ranksRoutes } from './ranks.routes';
import { specialtiesRoutes } from './specialties.routes';
import { employeeAddressesRoutes } from './employeeAddresses.routes';
import { employeePhonesRoutes } from './employeePhones.routes';

export const router = Router()

router.use("/employees", employeeRoutes);
router.use(authenticateRoutes);
router.use("/me", currentEmployeeRoutes);
router.use("/genders", gendersRoutes);
router.use("/maritalStatus", maritalStatusRoutes);
router.use("/educationLevels", educationLevelsRoutes);
router.use("/units", unitsRoutes);
router.use("/administrativeRoles", administrativeRolesRoutes);
router.use("/jobStatus", jobStatusRoutes)
router.use("/ranks", ranksRoutes)
router.use("/boards", boardsRoutes)
router.use("/specialties", specialtiesRoutes)
router.use("/employeeAddresses", employeeAddressesRoutes)
router.use("/employeePhones", employeePhonesRoutes)