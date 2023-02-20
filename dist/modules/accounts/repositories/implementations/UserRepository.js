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
exports.UserRepository = void 0;
const prisma_1 = require("../../../../prisma");
class UserRepository {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.user.create({
                data: {
                    fullname: user.firstPhone,
                    firstPhone: user.firstPhone,
                    cpf: user.cpf,
                    birthdate: user.birthdate,
                    birthplace: user.birthplace,
                    email: user.email,
                    numberOfChildren: user.numberOfChildren,
                    fkRegistrant: user.registrantId,
                    fkEducationLevel: user.educationLevelId,
                    fkGender: user.genderId,
                    fkMaritalStatus: user.maritalStatusId,
                    password: user.password,
                    createdAt: user.createdAt,
                }
            });
        });
    }
    findByFullNameAndPhone(fullname, firstPhone) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({
                where: {
                    fullname_firstPhone: {
                        fullname,
                        firstPhone
                    }
                },
            });
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({
                where: {
                    email
                },
            });
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.user.findUnique({
                where: { id }
            });
            return user;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.user.findMany();
        });
    }
}
exports.UserRepository = UserRepository;
