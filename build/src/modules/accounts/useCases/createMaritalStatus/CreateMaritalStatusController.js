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
exports.CreateMaritalStatusController = void 0;
const MaritalStatusRepository_1 = require("../../repositories/implementations/MaritalStatusRepository");
const CreateMaritalStatusUseCase_1 = require("./CreateMaritalStatusUseCase");
class CreateMaritalStatusController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createMaritalStatusUseCase = new CreateMaritalStatusUseCase_1.CreateMaritalStatusUseCase(new MaritalStatusRepository_1.MaritalStatusRepository);
            const { name } = request.body;
            const createMaritalStatus = yield createMaritalStatusUseCase.execute(name);
            return response.status(201).json(createMaritalStatus);
        });
    }
}
exports.CreateMaritalStatusController = CreateMaritalStatusController;
