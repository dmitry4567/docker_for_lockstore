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
exports.PhotoItemService = void 0;
const common_1 = require("@nestjs/common");
const photoItem_entity_1 = require("./entities/photoItem.entity");
const fs = require("fs");
const products_service_1 = require("../products/products.service");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PhotoItemService = class PhotoItemService {
    constructor(photoItemRepository, productSerive) {
        this.photoItemRepository = photoItemRepository;
        this.productSerive = productSerive;
    }
    async uploadPhotos(dto, photos) {
        const product = await this.productSerive.findOne(dto.productId);
        if (!product) {
            throw new common_1.BadRequestException('Product no found');
        }
        const photoEntities = photos.map((photo) => {
            const photoEntity = new photoItem_entity_1.PhotoItem();
            photoEntity.fileName = photo.filename;
            photoEntity.product = product;
            return photoEntity;
        });
        return await this.photoItemRepository.save(photoEntities);
    }
    async findAll() {
        return await this.photoItemRepository.find();
    }
    async findOne(id) {
        const photoItem = await this.photoItemRepository.findOneBy({ id });
        if (!photoItem) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'A photoItem with such an ID does not exist',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return photoItem;
    }
    async updatePhotosToProduct(id, dto, photos) {
        const toUpdate = await this.productSerive.findOne(id);
        if (photos) {
            for (let i = 0; i < toUpdate.photoItems.length; i++) {
                fs.unlink(`db_images/photoProduct/${toUpdate.photoItems[i].fileName}`, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
                await this.photoItemRepository.delete({
                    id: toUpdate.photoItems[i].id,
                });
            }
            const photoEntities = photos.map((photo) => {
                const photoEntity = new photoItem_entity_1.PhotoItem();
                photoEntity.fileName = photo.filename;
                photoEntity.product = toUpdate;
                return photoEntity;
            });
            await this.photoItemRepository.save(photoEntities);
            throw new common_1.HttpException('Фотограции обновлены', common_1.HttpStatus.OK);
        }
    }
    async delete(id) {
        const photoItem = await this.findOne(id);
        fs.unlink(`db_images/photoProduct/${photoItem.fileName}`, (err) => {
            if (err) {
                console.error(err);
            }
        });
        return this.photoItemRepository.delete({ id });
    }
};
exports.PhotoItemService = PhotoItemService;
exports.PhotoItemService = PhotoItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(photoItem_entity_1.PhotoItem)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        products_service_1.ProductsService])
], PhotoItemService);
//# sourceMappingURL=photo-item.service.js.map