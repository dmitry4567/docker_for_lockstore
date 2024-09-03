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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./products.service");
const update_product_dto_1 = require("./dto/update-product.dto");
const search_dto_1 = require("./dto/search-dto");
const role_decorator_1 = require("../decorators/role.decorator");
const roles_guards_1 = require("../auth/guards/roles.guards");
const create_product_dto_1 = require("./dto/create-product.dto");
const jwt_auth_guards_1 = require("../auth/guards/jwt-auth-guards");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(dto) {
        return this.productsService.create(dto);
    }
    findAll() {
        return this.productsService.findAll();
    }
    findOne(id) {
        return this.productsService.findOne(+id);
    }
    searchProducts(dto) {
        return this.productsService.searchProducts(dto);
    }
    updateProduct(id, dto) {
        return this.productsService.update(+id, dto);
    }
    remove(id) {
        return this.productsService.delete(+id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('addProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('SEARCH'),
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.ProductSearchDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "searchProducts", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('updateProduct/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('PRODUCTS'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map