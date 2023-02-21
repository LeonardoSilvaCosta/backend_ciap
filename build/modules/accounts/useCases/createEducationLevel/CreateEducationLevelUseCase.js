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
exports.CreateEducationLevelUseCase = void 0;
const AppError_1 = require("../../../../errors/AppError");
class CreateEducationLevelUseCase {
    constructor(educationLevelRepository) {
        this.educationLevelRepository = educationLevelRepository;
    }
    execute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const educationLevelAlreadyExists = yield this.educationLevelRepository.findById(name);
            if (educationLevelAlreadyExists) {
                throw new AppError_1.AppError("Education level already exists.");
            }
            ;
            return yield this.educationLevelRepository.create(name);
        });
    }
}
exports.CreateEducationLevelUseCase = CreateEducationLevelUseCase;
