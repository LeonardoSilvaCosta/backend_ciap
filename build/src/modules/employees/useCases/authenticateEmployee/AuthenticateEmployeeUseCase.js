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
exports.AuthenticateEmployeeUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../errors/AppError");
class AuthenticateEmployeeUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.userRepository.findByEmail(email);
            if (!employee) {
                throw new AppError_1.AppError("Email or password incorrect!");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, employee.password);
            if (!passwordMatch) {
                throw new AppError_1.AppError("Email or password incorrect!");
            }
            const token = (0, jsonwebtoken_1.sign)({}, "36167ff97a72db6e8e4ada9823d96c03", {
                subject: String(employee.id),
                expiresIn: "1d",
            });
            const tokenReturn = {
                user: {
                    name: employee.fullname,
                    email: employee.email
                },
                token
            };
            return tokenReturn;
        });
    }
}
exports.AuthenticateEmployeeUseCase = AuthenticateEmployeeUseCase;
