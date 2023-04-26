"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../errors/AppError");
const EmployeeRepository_1 = require("../modules/employees/repositories/implementations/EmployeeRepository");
function ensureAuthenticated(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.AppError("Token missing.", 401);
        }
        const [, token] = authHeader.split(" ");
        try {
            const { sub: employee_id } = (0, jsonwebtoken_1.verify)(token, "36167ff97a72db6e8e4ada9823d96c03");
            const usersRepository = new EmployeeRepository_1.EmployeeRepository();
            const user = yield usersRepository.findById(employee_id);
            if (!user) {
                throw new AppError_1.AppError("User does not exists!");
            }
            request.employee = {
                id: employee_id,
            };
            next();
        }
        catch (_a) {
            throw new AppError_1.AppError("Invalid token!", 401);
        }
    });
}
exports.ensureAuthenticated = ensureAuthenticated;
