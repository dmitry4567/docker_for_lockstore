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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const addProductToCart_dto_1 = require("./dto/addProductToCart.dto");
const jwt_auth_guards_1 = require("../auth/guards/jwt-auth-guards");
const swagger_1 = require("@nestjs/swagger");
const updateProductToCart_dto_1 = require("./dto/updateProductToCart.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addProductToCart(dto, req) {
        return await this.cartService.addProductToCart(dto, req.user);
    }
    getUserCartTotalPrice(req) {
        return this.cartService.getUserCartTotalPrice(req.user.id);
    }
    findAll(req) {
        return this.cartService.findAll(req.user);
    }
    findOne(id, req) {
        return this.cartService.findOne(+id, req.user);
    }
    async updateProductFromCart(dto, req) {
        return await this.cartService.UpdateProductFromCart(dto, req.user);
    }
    delete(id, req) {
        return this.cartService.remove(+id, req.user);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Post)('addProductToCart'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addProductToCart_dto_1.AddProductToCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addProductToCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Get)('getUserCartTotalPrice'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getUserCartTotalPrice", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Patch)('updateProductFromCart'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateProductToCart_dto_1.UpdateProductToCartDto, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateProductFromCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
exports.CartController = CartController = __decorate([
    (0, swagger_1.ApiTags)('cart'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map