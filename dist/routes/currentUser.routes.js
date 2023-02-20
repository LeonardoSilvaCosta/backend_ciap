"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserRoutes = void 0;
const express_1 = require("express");
const GetCurrentUserController_1 = require("../modules/accounts/useCases/getCurrentUser/GetCurrentUserController");
exports.currentUserRoutes = (0, express_1.Router)();
const getCurrentUserController = new GetCurrentUserController_1.GetCurrentUserController();
exports.currentUserRoutes.get("/", getCurrentUserController.handle);
