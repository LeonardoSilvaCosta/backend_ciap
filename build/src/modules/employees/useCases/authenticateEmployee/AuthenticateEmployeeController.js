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
exports.AuthenticateEmployeeController = void 0;
const AuthenticateEmployeeUseCase_1 = require("./AuthenticateEmployeeUseCase");
const EmployeeRepository_1 = require("../../repositories/implementations/EmployeeRepository");
class AuthenticateEmployeeController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticateUserUseCase = new AuthenticateEmployeeUseCase_1.AuthenticateEmployeeUseCase(new EmployeeRepository_1.EmployeeRepository);
            const { email, password } = request.body;
            const token = yield authenticateUserUseCase.execute({ password, email });
            return response.json(token);
        });
    }
}
exports.AuthenticateEmployeeController = AuthenticateEmployeeController;
