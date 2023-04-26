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
exports.GetCurrentEmployeeUseCase = void 0;
const AppError_1 = require("../../../../errors/AppError");
class GetCurrentEmployeeUseCase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    execute(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeRepository.findById(user_id);
            if (!employee) {
                throw new AppError_1.AppError("Employee not found.");
            }
            return employee;
        });
    }
}
exports.GetCurrentEmployeeUseCase = GetCurrentEmployeeUseCase;
