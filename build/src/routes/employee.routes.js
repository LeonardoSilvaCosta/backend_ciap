"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRoutes = void 0;
const express_1 = require("express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const CreateEmployeeController_1 = require("../modules/employees/useCases/createEmployee/CreateEmployeeController");
const ListUsersController_1 = require("../modules/employees/useCases/listEmployees/ListUsersController");
exports.employeeRoutes = (0, express_1.Router)();
const createEmployeeController = new CreateEmployeeController_1.CreateEmployeeController();
const listEmployeesController = new ListUsersController_1.ListEmployeesController();
exports.employeeRoutes.post("/", createEmployeeController.handle);
exports.employeeRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, listEmployeesController.handle);