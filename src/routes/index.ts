import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { educationLevelsRoutes } from './educationLevels.routes';
import { gendersRoutes } from './genders.routes';
import { maritalStatusRoutes } from './maritalStatus.routes';
import { currentEmployeeRoutes } from './currentEmployee.routes';
import { employeesRoutes } from './employees.routes';
import { unitsRoutes } from './units.routes';
import { administrativeRolesRoutes } from './administrativeRoles.routes';
import { jobStatusRoutes } from './jobStatus.routes';
import { boardsRoutes } from './boards.routes';
import { ranksRoutes } from './ranks.routes';
import { specialtiesRoutes } from './specialties.routes';
import { employeeAddressesRoutes } from './employeeAddresses.routes';
import { employeePhonesRoutes } from './employeePhones.routes';
import { typeOfBondsRoutes } from './typeOfBond.routes';
import { clientsRoutes } from './clients.routes';
import { clientAddressesRoutes } from './clientAddresses.routes';
import { clientPhonesRoutes } from './clientPhones.routes';

export const router = Router()

router.use("/employees", employeesRoutes);
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
router.use("/clients", clientsRoutes)
router.use("/clientAddresses", clientAddressesRoutes)
router.use("/clientPhones", clientPhonesRoutes)
router.use("/typeOfBonds", typeOfBondsRoutes)