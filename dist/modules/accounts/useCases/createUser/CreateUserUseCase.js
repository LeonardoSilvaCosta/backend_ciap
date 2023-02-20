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
exports.CreateUserUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const AppError_1 = require("../../../../errors/AppError");
class CreateUserUseCase {
    constructor(userRepository, createAddressUseCase) {
        this.userRepository = userRepository;
        this.createAddressUseCase = createAddressUseCase;
    }
    execute({ fullname, birthdate, cpf, gender_id, first_phone, email, address: { postal_code = "", number = 0 }, marital_status_id, education_level_id, number_of_children, birthplace, registrant_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield this.userRepository.findByFullNameAndPhone(fullname, first_phone);
            if (userAlreadyExists) {
                throw new AppError_1.AppError("User already exists.");
            }
            // const password = randomstring.generate(10);
            const password = "123";
            const passwordHash = yield (0, bcrypt_1.hash)(password, 8);
            const createdUser = yield this.userRepository.create({
                fullname,
                firstPhone: first_phone,
                birthdate,
                cpf,
                genderId: gender_id,
                email,
                educationLevelId: education_level_id,
                maritalStatusId: marital_status_id,
                numberOfChildren: number_of_children,
                birthplace,
                password: passwordHash,
                registrantId: registrant_id,
                createdAt: new Date(),
            });
            yield this.createAddressUseCase.execute({
                fkUser: createdUser.id,
                address: { postal_code, number }
            });
            return createdUser;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
