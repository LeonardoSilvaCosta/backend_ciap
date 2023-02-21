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
exports.AddressRepository = void 0;
const prisma_1 = require("../../../../prisma");
class AddressRepository {
    create({ fkUser, address }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.address.create({
                data: {
                    postalCode: address.postal_code,
                    number: address.number,
                    fkUser
                }
            });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield prisma_1.prisma.address.findUnique({
                where: { id }
            });
            return address;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.address.findMany();
        });
    }
}
exports.AddressRepository = AddressRepository;
