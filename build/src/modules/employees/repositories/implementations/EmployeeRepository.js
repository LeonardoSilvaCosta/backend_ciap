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
exports.EmployeeRepository = void 0;
const prisma_1 = require("../../../../prisma");
class EmployeeRepository {
    create(employee) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.employee.create({
                data: {
                    avatar: employee.avatar,
                    fullname: employee.fullname,
                    birthdate: employee.birthdate,
                    cpf: employee.cpf,
                    fkGender: employee.gender_id,
                    email: employee.email,
                    fkMaritalStatus: employee.marital_status_id,
                    fkEducationLevel: employee.education_level_id,
                    numberOfChildren: employee.number_of_children,
                    birthplace: employee.birthplace,
                    codeName: employee.code_name,
                    fkUnit: employee.unit_id,
                    fkAdministrativeRole: employee.administrative_role_id,
                    fkJobStatus: employee.job_status_id,
                    militaryId: employee.military_id,
                    fkRank: employee.rank_id,
                    fkBoard: employee.board_id,
                    fkSpecialty: employee.specialty_id,
                    password: employee.password
                },
                include: {
                    Address: true,
                    Gender: true,
                    MaritalStatus: true,
                    EducationLevel: true,
                    Unit: true,
                    AdministrativeRole: true,
                    JobStatus: true,
                    Rank: true,
                    Board: true,
                    Specialty: true,
                    CreatedBy: true,
                }
            });
            return {
                id: response.id,
                avatar: response.avatar,
                fullname: response.fullname,
                birthdate: response.birthdate,
                cpf: response.cpf,
                gender: response.Gender,
                email: response.email,
                address: response.Address,
                marital_status: response.MaritalStatus,
                education_level: response.EducationLevel,
                number_of_children: response.numberOfChildren,
                birthplace: response.birthplace,
                code_name: response.codeName,
                unit: response.Unit,
                administrative_role: response.AdministrativeRole,
                job_status: response.JobStatus,
                military_id: response.militaryId,
                rank: response.Rank,
                board: response.Board,
                specialty: response.Specialty,
                created_at: response.createdAt,
                created_by: (_a = response.CreatedBy) === null || _a === void 0 ? void 0 : _a.id
            };
        });
    }
    // async findByFullNameAndPhone(fullname: string, firstPhone: string): Promise<Employee | null> {
    //   const user = await prisma.employee.findUnique({
    //     where: {
    //       fullname_firstPhone: {
    //         fullname,
    //         firstPhone
    //       }
    //     },
    //   })
    //   return user
    // }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield prisma_1.prisma.employee.findUnique({
                where: {
                    email
                }
            });
            return employee;
        });
    }
    findById(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.employee.findUniqueOrThrow({
                where: { id },
                include: {
                    Gender: true,
                    Address: true,
                    MaritalStatus: true,
                    EducationLevel: true,
                    Phones: true,
                    EmployeeUpdates: true,
                    Unit: true,
                    AdministrativeRole: true,
                    JobStatus: true,
                    Rank: true,
                    Board: true,
                    Specialty: true,
                    CreatedBy: true,
                }
            });
            return {
                id: response.id,
                avatar: response.avatar,
                fullname: response.fullname,
                birthdate: response.birthdate,
                cpf: response.cpf,
                gender: response.Gender,
                email: response.email,
                address: response.Address,
                marital_status: response.MaritalStatus,
                education_level: response.EducationLevel,
                number_of_children: response.numberOfChildren,
                birthplace: response.birthplace,
                code_name: response.codeName,
                unit: response.Unit,
                administrative_role: response.AdministrativeRole,
                job_status: response.JobStatus,
                military_id: response.militaryId,
                rank: response.Rank,
                board: response.Board,
                specialty: response.Specialty,
                created_at: response.createdAt,
                created_by: (_a = response.CreatedBy) === null || _a === void 0 ? void 0 : _a.id
            };
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield prisma_1.prisma.employee.findMany({
                include: {
                    Gender: true,
                    Address: true,
                    MaritalStatus: true,
                    EducationLevel: true,
                    Phones: true,
                    EmployeeUpdates: true,
                    Unit: true,
                    AdministrativeRole: true,
                    JobStatus: true,
                    Rank: true,
                    Board: true,
                    Specialty: true,
                    CreatedBy: true,
                }
            });
            const formattedEmployees = response.map((e) => {
                var _a;
                return {
                    id: e.id,
                    avatar: e.avatar,
                    fullname: e.fullname,
                    birthdate: e.birthdate,
                    cpf: e.cpf,
                    gender: e.Gender,
                    email: e.email,
                    address: e.Address,
                    marital_status: e.MaritalStatus,
                    education_level: e.EducationLevel,
                    number_of_children: e.numberOfChildren,
                    birthplace: e.birthplace,
                    code_name: e.codeName,
                    unit: e.Unit,
                    administrative_role: e.AdministrativeRole,
                    job_status: e.JobStatus,
                    military_id: e.militaryId,
                    rank: e.Rank,
                    board: e.Board,
                    specialty: e.Specialty,
                    created_at: e.createdAt,
                    created_by: (_a = e.CreatedBy) === null || _a === void 0 ? void 0 : _a.id
                };
            });
            return formattedEmployees;
        });
    }
}
exports.EmployeeRepository = EmployeeRepository;
