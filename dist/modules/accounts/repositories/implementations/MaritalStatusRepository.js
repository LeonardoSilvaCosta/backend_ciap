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
exports.MaritalStatusRepository = void 0;
const prisma_1 = require("../../../../prisma");
class MaritalStatusRepository {
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.maritalStatus.create({
                data: {
                    name
                }
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const maritalStatus = yield prisma_1.prisma.maritalStatus.findUnique({
                where: { id }
            });
            return maritalStatus;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.maritalStatus.findMany();
        });
    }
}
exports.MaritalStatusRepository = MaritalStatusRepository;
