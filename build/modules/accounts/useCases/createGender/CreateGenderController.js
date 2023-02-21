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
exports.CreateGenderController = void 0;
const GenderRepository_1 = require("../../repositories/implementations/GenderRepository");
const CreateGenderUseCase_1 = require("./CreateGenderUseCase");
class CreateGenderController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createGenderUseCase = new CreateGenderUseCase_1.CreateGenderUseCase(new GenderRepository_1.GenderRepository);
            const { name } = request.body;
            const createGender = yield createGenderUseCase.execute(name);
            return response.status(201).json(createGender);
        });
    }
}
exports.CreateGenderController = CreateGenderController;
