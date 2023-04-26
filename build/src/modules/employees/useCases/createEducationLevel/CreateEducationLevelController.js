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
exports.CreateEducationLevelController = void 0;
const EducationLevelRepository_1 = require("../../repositories/implementations/EducationLevelRepository");
const CreateEducationLevelUseCase_1 = require("./CreateEducationLevelUseCase");
class CreateEducationLevelController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: employee_id } = request.employee;
            const createEducationLevelUseCase = new CreateEducationLevelUseCase_1.CreateEducationLevelUseCase(new EducationLevelRepository_1.EducationLevelRepository);
            const { name } = request.body;
            const createEducationLevel = yield createEducationLevelUseCase.execute(employee_id, name);
            return response.status(201).json(createEducationLevel);
        });
    }
}
exports.CreateEducationLevelController = CreateEducationLevelController;
