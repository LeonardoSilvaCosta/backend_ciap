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
exports.CreateEmployeeController = void 0;
const CreateEmployeeUseCase_1 = require("./CreateEmployeeUseCase");
const EmployeeRepository_1 = require("../../repositories/implementations/EmployeeRepository");
const CreateEmployeeAddressUseCase_1 = require("../createEmployeeAddress/CreateEmployeeAddressUseCase");
const EmployeeAddressRepository_1 = require("../../repositories/implementations/EmployeeAddressRepository");
class CreateEmployeeController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createEmployeeUseCase = new CreateEmployeeUseCase_1.CreateEmployeeUseCase(new EmployeeRepository_1.EmployeeRepository, new CreateEmployeeAddressUseCase_1.CreateEmployeeAddressUseCase(new EmployeeAddressRepository_1.EmployeeAddressRepository));
            const { avatar, fullname, birthdate, cpf, gender_id, email, address: { postal_code, number }, marital_status_id, education_level_id, number_of_children, birthplace, code_name, unit_id, administrative_role_id, job_status_id, military_id, rank_id, board_id, specialty_id, password } = request.body;
            const createEmployee = yield createEmployeeUseCase.execute({
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
                password
            });
            return response.status(201).json(createEmployee);
        });
    }
}
exports.CreateEmployeeController = CreateEmployeeController;
