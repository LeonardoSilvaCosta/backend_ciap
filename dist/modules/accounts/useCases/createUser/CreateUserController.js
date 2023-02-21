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
exports.CreateUserController = void 0;
const AddressRepository_1 = require("../../repositories/implementations/AddressRepository");
const UserRepository_1 = require("../../repositories/implementations/UserRepository");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const CreateAddressUseCase_1 = require("../createAddress/CreateAddressUseCase");
class CreateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { id: user_id } = request.user;
            const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(new UserRepository_1.UserRepository, new CreateAddressUseCase_1.CreateAddressUseCase(new AddressRepository_1.AddressRepository));
            const { fullname, first_phone, birthdate, cpf, gender_id, email, address: { postal_code, number }, marital_status_id, education_level_id, birthplace } = request.body;
            const createUser = yield createUserUseCase.execute({
                fullname,
                first_phone,
                birthdate,
                cpf,
                gender_id,
                email,
                address: { postal_code, number },
                marital_status_id,
                education_level_id,
                birthplace,
                registrant_id: null
            });
            return response.status(201).json(createUser);
        });
    }
}
exports.CreateUserController = CreateUserController;
