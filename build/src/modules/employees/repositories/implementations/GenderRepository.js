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
exports.GenderRepository = void 0;
const prisma_1 = require("../../../../prisma");
class GenderRepository {
    create(employee_id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.gender.create({
                data: {
                    name,
                    createdAt: new Date(),
                    createdBy: employee_id
                }
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const gender = yield prisma_1.prisma.gender.findUnique({
                where: { id }
            });
            return gender;
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const gender = yield prisma_1.prisma.gender.findUnique({
                where: { name }
            });
            return gender;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.gender.findMany();
        });
    }
}
exports.GenderRepository = GenderRepository;
