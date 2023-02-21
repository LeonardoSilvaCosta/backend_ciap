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
                }
            });
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_with_selected_relations = yield prisma_1.prisma.user.findUniqueOrThrow({
                where: { id },
                select: {
                    id: true,
                    fullname: true,
                    firstPhone: true,
                    birthdate: true,
                    cpf: true,
                    email: true,
                    numberOfChildren: true,
                    birthplace: true,
                    createdAt: true,
                    Gender: {
                        select: {
                            name: true,
                        }
                    },
                    Address: {
                        select: {
                            postalCode: true,
                            number: true,
                        }
                    },
                    MaritalStatus: {
                        select: {
                            name: true,
                        }
                    },
                    EducationLevel: {
                        select: {
                            name: true,
                        }
                    },
                    Registrant: {
                        select: {
                            userId: true
                        }
                    },
                    Phone: {
                        select: {
                            telefone: true
                        }
                    },
                    UpdateInformation: {
                        select: {
                            createdAt: true,
                            employeeId: true
                        }
                    },
                },
            });
            const phones = user_with_selected_relations.Phone.map((e) => {
                return {
                    phone: e.telefone
                };
            });
            const update_information = user_with_selected_relations.UpdateInformation.map((e) => {
                return {
                    created_at: e.createdAt,
                    employee_id: e.employeeId
                };
            });
            return {
                id: user_with_selected_relations === null || user_with_selected_relations === void 0 ? void 0 : user_with_selected_relations.id,
                fullname: user_with_selected_relations === null || user_with_selected_relations === void 0 ? void 0 : user_with_selected_relations.fullname,
                firstPhone: user_with_selected_relations.firstPhone,
                birthdate: user_with_selected_relations.birthdate,
                cpf: user_with_selected_relations.cpf,
                gender: user_with_selected_relations.Gender,
                email: user_with_selected_relations.email,
                address: user_with_selected_relations.Address,
                marital_status: user_with_selected_relations.MaritalStatus,
                education_level: user_with_selected_relations.EducationLevel,
                number_of_children: user_with_selected_relations.numberOfChildren,
                birthplace: user_with_selected_relations.birthplace,
                created_at: user_with_selected_relations.createdAt,
                registrant_id: user_with_selected_relations.Registrant,
                phones,
                update_information,
            };
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const users_with_selected_relations = yield prisma_1.prisma.user.findMany({
                select: {
                    id: true,
                    fullname: true,
                    firstPhone: true,
                    birthdate: true,
                    cpf: true,
                    email: true,
                    numberOfChildren: true,
                    birthplace: true,
                    createdAt: true,
                    Gender: {
                        select: {
                            name: true,
                        }
                    },
                    Address: {
                        select: {
                            postalCode: true,
                            number: true,
                        }
                    },
                    MaritalStatus: {
                        select: {
                            name: true,
                        }
                    },
                    EducationLevel: {
                        select: {
                            name: true,
                        }
                    },
                    Registrant: {
                        select: {
                            userId: true
                        }
                    },
                    Phone: {
                        select: {
                            telefone: true
                        }
                    },
                    UpdateInformation: {
                        select: {
                            createdAt: true,
                            employeeId: true
                        }
                    },
                },
            });
            const phones = users_with_selected_relations.flatMap((e) => {
                return e.Phone.map((item) => {
                    return {
                        phone: item.telefone
                    };
                });
            });
            const update_information = users_with_selected_relations.flatMap((e) => {
                return e.UpdateInformation.map((item) => {
                    return {
                        created_at: item.createdAt,
                        employee_id: item.employeeId
                    };
                });
            });
            const formattedUsers = users_with_selected_relations.map((e) => {
                return {
                    id: e.id,
                    fullname: e.fullname,
                    firstPhone: e.firstPhone,
                    birthdate: e.birthdate,
                    cpf: e.cpf,
                    gender: e.Gender,
                    email: e.email,
                    address: e.Address,
                    marital_status: e.MaritalStatus,
                    education_level: e.EducationLevel,
                    number_of_children: e.numberOfChildren,
                    birthplace: e.birthplace,
                    created_at: e.createdAt,
                    registrant_id: e.Registrant,
                    phones,
                    update_information,
                };
            });
            return formattedUsers;
        });
    }
}
exports.UserRepository = UserRepository;
