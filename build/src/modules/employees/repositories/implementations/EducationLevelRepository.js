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
exports.EducationLevelRepository = void 0;
const prisma_1 = require("../../../../prisma");
class EducationLevelRepository {
    create(employee_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.educationLevel.create({
                data: {
                    name,
                    createdBy: employee_id
                }
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const educationLevel = yield prisma_1.prisma.educationLevel.findUnique({
                where: { id }
            });
            return educationLevel;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const educationLevel = yield prisma_1.prisma.educationLevel.findUnique({
                where: { name }
            });
            return educationLevel;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.educationLevel.findMany();
        });
    }
}
exports.EducationLevelRepository = EducationLevelRepository;
