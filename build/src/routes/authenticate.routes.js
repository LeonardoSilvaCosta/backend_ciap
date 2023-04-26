"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const AuthenticateEmployeeController_1 = require("../modules/employees/useCases/authenticateEmployee/AuthenticateEmployeeController");
exports.authenticateRoutes = (0, express_1.Router)();
const authenticateEmployeeController = new AuthenticateEmployeeController_1.AuthenticateEmployeeController();
exports.authenticateRoutes.post("/sessions", authenticateEmployeeController.handle);
