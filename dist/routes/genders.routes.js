"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gendersRoutes = void 0;
const express_1 = require("express");
const CreateGenderController_1 = require("../modules/accounts/useCases/createGender/CreateGenderController");
exports.gendersRoutes = (0, express_1.Router)();
const createGenderController = new CreateGenderController_1.CreateGenderController();
exports.gendersRoutes.post("/", createGenderController.handle);
