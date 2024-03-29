"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationLevelsRoutes = void 0;
const express_1 = require("express");
const CreateEducationLevelController_1 = require("../modules/employees/useCases/createEducationLevel/CreateEducationLevelController");
exports.educationLevelsRoutes = (0, express_1.Router)();
const educationLevelController = new CreateEducationLevelController_1.CreateEducationLevelController();
exports.educationLevelsRoutes.post("/", educationLevelController.handle);
