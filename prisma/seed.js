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
const prisma_1 = require(".");
const bcrypt_1 = require("bcrypt");
const date_fns_1 = require("date-fns");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminPasswordHash = yield (0, bcrypt_1.hash)("admin", 8);
        const userPasswordHash = yield (0, bcrypt_1.hash)("102030", 8);
        const gender = yield prisma_1.prisma.gender.create({
            data: {
                id: "760d485c-a905-46d7-b570-11779a5ca4ba",
                name: "Masculino"
            }
        });
        const maritalStauts = yield prisma_1.prisma.maritalStatus.create({
            data: {
                id: "fe5fe045-7f76-4daf-863f-dc7ce62bca49",
                name: "Solteiro(a)"
            }
        });
        const superiorIncompletoId = "12243cb0-c920-4d25-a414-d16f4f9342cc";
        const superiorCompletoId = "8ccfa318-a60d-4df0-839b-c851c64dcf5a";
        const educationLevels = yield prisma_1.prisma.educationLevel.createMany({
            data: [
                {
                    id: superiorIncompletoId,
                    name: "Superior incompleto"
                },
                {
                    id: superiorCompletoId,
                    name: "Superior completo"
                },
            ],
        });
        const admin = yield prisma_1.prisma.user.create({
            data: {
                fullname: "Leonardo da Silva Costa",
                firstPhone: "91988165507",
                birthdate: (0, date_fns_1.parse)('20/01/1992', 'dd/MM/yyyy', new Date()),
                cpf: "98264567215",
                fkGender: gender.id,
                email: "leonardocostapsi@gmail.com",
                fkMaritalStatus: maritalStauts.id,
                fkEducationLevel: superiorCompletoId,
                numberOfChildren: 0,
                birthplace: "Belém-PA",
                password: adminPasswordHash,
                createdAt: new Date(),
            }
        });
        const user = yield prisma_1.prisma.user.create({
            data: {
                fullname: "Enzo Gabriel Pinheiro de Leão",
                firstPhone: "91991611201",
                birthdate: (0, date_fns_1.parse)('20/01/1992', 'dd/MM/yyyy', new Date()),
                cpf: "02401417252",
                fkGender: gender.id,
                email: "enzopinheiro6@gmail.com",
                fkMaritalStatus: maritalStauts.id,
                fkEducationLevel: superiorIncompletoId,
                numberOfChildren: 0,
                birthplace: "Belém-PA",
                password: userPasswordHash,
                createdAt: new Date(),
            }
        });
        yield prisma_1.prisma.address.create({
            data: {
                number: 53,
                postalCode: "66635510",
                fkUser: admin.id
            }
        });
        yield prisma_1.prisma.address.create({
            data: {
                number: 19,
                postalCode: "67125600",
                fkUser: user.id
            }
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma_1.prisma.$disconnect();
    process.exit(1);
}));
