"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentEmployeeRoutes = void 0;
const express_1 = require("express");
const GetCurrentEmployeeController_1 = require("../modules/employees/useCases/getCurrentEmployee/GetCurrentEmployeeController");
exports.currentEmployeeRoutes = (0, express_1.Router)();
const getCurrentEmployeeController = new GetCurrentEmployeeController_1.GetCurrentEmployeeController();
exports.currentEmployeeRoutes.get("/", getCurrentEmployeeController.handle);
