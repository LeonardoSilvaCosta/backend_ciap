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
exports.CreateGenderUseCase = void 0;
const AppError_1 = require("../../../../errors/AppError");
class CreateGenderUseCase {
    constructor(genreRepository) {
        this.genreRepository = genreRepository;
    }
    execute(employee_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const genderAlreadyExists = yield this.genreRepository.findByName(name);
            if (genderAlreadyExists) {
                throw new AppError_1.AppError("Gender already exists.");
            }
            ;
            return yield this.genreRepository.create(name, employee_id);
        });
    }
}
exports.CreateGenderUseCase = CreateGenderUseCase;
