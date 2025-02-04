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
exports.FeatureController = void 0;
const common_1 = require("@nestjs/common");
const feature_service_1 = require("./feature.service");
const create_feature_dto_1 = require("./dto/create-feature.dto");
const update_feature_dto_1 = require("./dto/update-feature.dto");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../decorators/role.decorator");
const roles_guards_1 = require("../auth/guards/roles.guards");
const jwt_auth_guards_1 = require("../auth/guards/jwt-auth-guards");
let FeatureController = class FeatureController {
    constructor(featureService) {
        this.featureService = featureService;
    }
    create(createFeatureDto) {
        return this.featureService.create(createFeatureDto);
    }
    findAll() {
        return this.featureService.findAll();
    }
    findOne(id) {
        return this.featureService.findOne(+id);
    }
    update(id, updateFeatureDto) {
        return this.featureService.update(+id, updateFeatureDto);
    }
    remove(id) {
        return this.featureService.remove(+id);
    }
};
exports.FeatureController = FeatureController;
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feature_dto_1.CreateFeatureDto]),
    __metadata("design:returntype", void 0)
], FeatureController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FeatureController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeatureController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_feature_dto_1.UpdateFeatureDto]),
    __metadata("design:returntype", void 0)
], FeatureController.prototype, "update", null);
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
], FeatureController.prototype, "remove", null);
exports.FeatureController = FeatureController = __decorate([
    (0, swagger_1.ApiTags)('FEATURE'),
    (0, common_1.Controller)('feature'),
    __metadata("design:paramtypes", [feature_service_1.FeatureService])
], FeatureController);
//# sourceMappingURL=feature.controller.js.map