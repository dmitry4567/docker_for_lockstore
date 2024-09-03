"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const cart_service_1 = require("../cart/cart.service");
const role_service_1 = require("../role/role.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository, cartService, roleService) {
        this.userRepository = userRepository;
        this.cartService = cartService;
        this.roleService = roleService;
        this.hashSaltRounds = parseInt(process.env.HASH_SALT_ROUNDS);
    }
    async create(dto) {
        const existingUser = await this.findByEmail(dto.email);
        if (existingUser) {
            throw new common_1.BadRequestException(`Пользователь с email: ${dto.email} уже существует`);
        }
        const hashedPassword = await bcrypt.hash(dto.password, this.hashSaltRounds);
        const user = await this.userRepository.save({
            email: dto.email,
            password: hashedPassword,
        });
        const cart = await this.cartService.createCart(user);
        user.cart = cart;
        const role = await this.roleService.getRoleByValue('user');
        user.role = role;
        await this.userRepository.save(user);
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            relations: {
                role: true,
            },
            where: {
                email: email,
            },
        });
        return user;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async findById(id) {
        return this.userRepository.findOneBy({
            id,
        });
    }
    async remove(req) {
        return await this.userRepository.delete(req.user.id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEnitity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cart_service_1.CartService,
        role_service_1.RoleService])
], UserService);
//# sourceMappingURL=user.service.js.map