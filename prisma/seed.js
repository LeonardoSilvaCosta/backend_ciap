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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var prisma_1 = require("../src/prisma");
var bcrypt_1 = require("bcrypt");
var date_fns_1 = require("date-fns");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var adminPasswordHash, userPasswordHash, gender, maritalStauts, superiorIncompletoId, superiorCompletoId, educationLevels, admin, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, bcrypt_1.hash)("admin", 8)];
                case 1:
                    adminPasswordHash = _a.sent();
                    return [4 /*yield*/, (0, bcrypt_1.hash)("102030", 8)];
                case 2:
                    userPasswordHash = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.gender.create({
                            data: {
                                id: "760d485c-a905-46d7-b570-11779a5ca4ba",
                                name: "Masculino"
                            }
                        })];
                case 3:
                    gender = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.maritalStatus.create({
                            data: {
                                id: "fe5fe045-7f76-4daf-863f-dc7ce62bca49",
                                name: "Solteiro(a)"
                            }
                        })];
                case 4:
                    maritalStauts = _a.sent();
                    superiorIncompletoId = "12243cb0-c920-4d25-a414-d16f4f9342cc";
                    superiorCompletoId = "8ccfa318-a60d-4df0-839b-c851c64dcf5a";
                    return [4 /*yield*/, prisma_1.prisma.educationLevel.createMany({
                            data: [
                                {
                                    id: superiorIncompletoId,
                                    name: "Superior incompleto"
                                },
                                {
                                    id: superiorCompletoId,
                                    name: "Superior completo"
                                },
                            ]
                        })];
                case 5:
                    educationLevels = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.user.create({
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
                                createdAt: new Date()
                            }
                        })];
                case 6:
                    admin = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.user.create({
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
                                createdAt: new Date()
                            }
                        })];
                case 7:
                    user = _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.address.create({
                            data: {
                                number: 53,
                                postalCode: "66635510",
                                fkUser: admin.id
                            }
                        })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma_1.prisma.address.create({
                            data: {
                                number: 19,
                                postalCode: "67125600",
                                fkUser: user.id
                            }
                        })];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma_1.prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
