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
exports.EmployeeAddressRepository = void 0;
const prisma_1 = require("../../../../prisma");
class EmployeeAddressRepository {
    create({ employee_id, address }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.employeeAddress.create({
                data: {
                    employeeId: employee_id,
                    postalCode: address.postal_code,
                    number: address.number,
                    createdAt: new Date(),
                }
            });
        });
    }
    findById(employee_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield prisma_1.prisma.employeeAddress.findUnique({
                where: { employeeId: employee_id }
            });
            return address;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.employeeAddress.findMany();
        });
    }
}
exports.EmployeeAddressRepository = EmployeeAddressRepository;
