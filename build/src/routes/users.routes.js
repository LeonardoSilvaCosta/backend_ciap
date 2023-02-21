"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const CreateUserController_1 = require("../modules/accounts/useCases/createUser/CreateUserController");
const ListUsersController_1 = require("../modules/accounts/useCases/listUsers/ListUsersController");
exports.usersRoutes = (0, express_1.Router)();
const createUserController = new CreateUserController_1.CreateUserController();
const listUsersController = new ListUsersController_1.ListUsersController();
exports.usersRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, createUserController.handle);
exports.usersRoutes.get("/", ensureAuthenticated_1.ensureAuthenticated, listUsersController.handle);
