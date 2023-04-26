"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maritalStatusRoutes = void 0;
const express_1 = require("express");
const CreateMaritalStatusController_1 = require("../modules/employees/useCases/createMaritalStatus/CreateMaritalStatusController");
exports.maritalStatusRoutes = (0, express_1.Router)();
const maritalStatusController = new CreateMaritalStatusController_1.CreateMaritalStatusController();
exports.maritalStatusRoutes.post("/", maritalStatusController.handle);
