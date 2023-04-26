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
exports.GetCurrentEmployeeController = void 0;
const AppError_1 = require("../../../../errors/AppError");
const EmployeeRepository_1 = require("../../repositories/implementations/EmployeeRepository");
const GetCurrentEmployeeUseCase_1 = require("./GetCurrentEmployeeUseCase");
class GetCurrentEmployeeController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const getCurrentEmployeeUseCase = new GetCurrentEmployeeUseCase_1.GetCurrentEmployeeUseCase(new EmployeeRepository_1.EmployeeRepository);
            const { authorization } = request.headers;
            const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
            if (!token) {
                throw new AppError_1.AppError("Token missing.");
            }
            const base64Token = token.split('.')[1];
            const payload = Buffer.from(String(base64Token), 'base64').toString();
            const id = JSON.parse(payload).sub;
            const getEmployee = yield getCurrentEmployeeUseCase.execute(id);
            return response.json(getEmployee);
        });
    }
}
exports.GetCurrentEmployeeController = GetCurrentEmployeeController;
