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
exports.CreateEmployeeUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const AppError_1 = require("../../../../errors/AppError");
class CreateEmployeeUseCase {
    constructor(employeeRepository, createEmployeeAddressUseCase) {
        this.employeeRepository = employeeRepository;
        this.createEmployeeAddressUseCase = createEmployeeAddressUseCase;
    }
    execute({ avatar, fullname, birthdate, cpf, gender_id, email, address: { postal_code, number }, marital_status_id, education_level_id, number_of_children, birthplace, code_name, unit_id, administrative_role_id, job_status_id, military_id, rank_id, board_id, specialty_id, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeAlreadyExists = yield this.employeeRepository.findByEmail(email);
            if (employeeAlreadyExists) {
                throw new AppError_1.AppError("Employee already exists.");
            }
            const passwordHash = yield (0, bcrypt_1.hash)(password, 8);
            const createdEmployee = yield this.employeeRepository.create({
                avatar,
                fullname,
                birthdate,
                cpf,
                gender_id,
                email,
                address: { postal_code, number },
                marital_status_id,
                education_level_id,
                number_of_children,
                birthplace,
                code_name,
                unit_id,
                administrative_role_id,
                job_status_id,
                military_id,
                rank_id,
                board_id,
                specialty_id,
                password: passwordHash,
            });
            yield this.createEmployeeAddressUseCase.execute({
                employee_id: createdEmployee.id ? createdEmployee.id : "",
                address: { postal_code, number },
            });
            //CreateEmployeePhones
            return createdEmployee;
        });
    }
}
exports.CreateEmployeeUseCase = CreateEmployeeUseCase;
