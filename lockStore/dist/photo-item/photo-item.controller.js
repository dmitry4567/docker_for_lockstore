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
exports.PhotoItemController = void 0;
const common_1 = require("@nestjs/common");
const photo_item_service_1 = require("./photo-item.service");
const swagger_1 = require("@nestjs/swagger");
const add_photo_to_product_dto_1 = require("./dto/add-photo-to-product.dto");
const jwt_auth_guards_1 = require("../auth/guards/jwt-auth-guards");
const roles_guards_1 = require("../auth/guards/roles.guards");
const role_decorator_1 = require("../decorators/role.decorator");
const platform_express_1 = require("@nestjs/platform-express");
const storage_1 = require("./storage");
const update_photos_to_product_dto_1 = require("./dto/update-photos-to-product.dto");
let PhotoItemController = class PhotoItemController {
    constructor(photoItemService) {
        this.photoItemService = photoItemService;
    }
    async uploadPhotos(dto, photos) {
        return this.photoItemService.uploadPhotos(dto, photos);
    }
    download(path, response) {
        return response.sendFile(path, { root: './db_images/photoProduct' });
    }
    findAll() {
        return this.photoItemService.findAll();
    }
    findOne(id) {
        return this.photoItemService.findOne(+id);
    }
    updatePhotosToProduct(id, dto, photos) {
        return this.photoItemService.updatePhotosToProduct(+id, dto, photos);
    }
    remove(id) {
        return this.photoItemService.delete(+id);
    }
};
exports.PhotoItemController = PhotoItemController;
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('/upload-photos/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('photos', 20, { storage: storage_1.fileStorage })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_photo_to_product_dto_1.AddPhotosToProductDto, Array]),
    __metadata("design:returntype", Promise)
], PhotoItemController.prototype, "uploadPhotos", null);
__decorate([
    (0, common_1.Get)('/product/:path'),
    __param(0, (0, common_1.Param)('path')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PhotoItemController.prototype, "download", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PhotoItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PhotoItemController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(roles_guards_1.RolesGuard),
    (0, common_1.UseGuards)(jwt_auth_guards_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('updatePhotosToProduct/:id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('photos', 20, { storage: storage_1.fileStorage })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_photos_to_product_dto_1.UpdatePhotosToProductDto, Array]),
    __metadata("design:returntype", void 0)
], PhotoItemController.prototype, "updatePhotosToProduct", null);
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
], PhotoItemController.prototype, "remove", null);
exports.PhotoItemController = PhotoItemController = __decorate([
    (0, swagger_1.ApiTags)('PHOTO_ITEM'),
    (0, common_1.Controller)('photoItem'),
    __metadata("design:paramtypes", [photo_item_service_1.PhotoItemService])
], PhotoItemController);
//# sourceMappingURL=photo-item.controller.js.map