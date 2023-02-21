"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoutes = void 0;
const express_1 = require("express");
const AuthenticateUserController_1 = require("../modules/accounts/useCases/authenticateUser/AuthenticateUserController");
exports.authenticateRoutes = (0, express_1.Router)();
const authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
exports.authenticateRoutes.post("/sessions", authenticateUserController.handle);
