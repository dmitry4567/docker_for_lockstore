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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const photoItem_entity_1 = require("../photo-item/entities/photoItem.entity");
const category_service_1 = require("../category/category.service");
const feature_service_1 = require("../feature/feature.service");
const color_service_1 = require("../color/color.service");
const material_service_1 = require("../material/material.service");
let ProductsService = class ProductsService {
    constructor(repository, repository2, categoryService, featureService, colorService, materialService) {
        this.repository = repository;
        this.repository2 = repository2;
        this.categoryService = categoryService;
        this.featureService = featureService;
        this.colorService = colorService;
        this.materialService = materialService;
    }
    async create(dto) {
        const category = await this.categoryService.findOne(dto.categoryId);
        const feature = await this.featureService.findOne(dto.featureId);
        const color = await this.colorService.findOne(dto.colorId);
        const material = await this.materialService.findOne(dto.materialId);
        const product = new product_entity_1.ProductEntity();
        product.title = dto.title;
        product.rate = dto.rate;
        product.price = dto.price;
        product.oldPrice = dto.oldPrice;
        product.category = category;
        product.feature = feature;
        product.color = color;
        product.material = material;
        await this.repository.save(product);
        return product;
    }
    async getProductById(id) {
        return await this.repository.findOneBy({ id: id });
    }
    async findAll() {
        const product = await this.repository.find({
            relations: {
                photoItems: true,
            },
        });
        return product;
    }
    async findOne(id) {
        const product = await this.repository.findOne({
            relations: {
                photoItems: true,
            },
            where: {
                id: id,
            },
        });
        if (!product) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'A product with such an ID does not exist',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    async update(id, dto) {
        const toUpdate = await this.findOne(id);
        Object.keys(dto).forEach((key) => {
            if (dto[key]) {
                toUpdate[key] = dto[key];
            }
        });
        return this.repository.save(toUpdate);
    }
    async searchProducts(data) {
        const queryBuilder = this.repository.createQueryBuilder('products');
        queryBuilder.leftJoinAndSelect('products.category', 'category');
        queryBuilder.leftJoinAndSelect('products.feature', 'feature');
        queryBuilder.leftJoinAndSelect('products.color', 'color');
        queryBuilder.leftJoinAndSelect('products.material', 'material');
        if (data.categoryid) {
            const categories = data.categoryid.split(',').map((x) => +x);
            queryBuilder.where('category.id IN (:...categories)', { categories });
        }
        if (data.featureid) {
            const features = data.featureid.split(',').map((x) => +x);
            queryBuilder.where('feature.id IN (:...features)', { features });
        }
        if (data.colorid) {
            const colorid = data.colorid;
            queryBuilder.where('color.id = :colorid', { colorid });
        }
        if (data.materialid) {
            const materialid = data.materialid;
            queryBuilder.where('material.id = :materialid', { materialid });
        }
        if (data.title) {
            queryBuilder.andWhere('title LIKE :title', { title: `%${data.title}%` });
        }
        if (data.priceMin && typeof data.priceMin === 'number') {
            queryBuilder.andWhere('price >= :min', { min: data.priceMin });
        }
        if (data.priceMax && typeof data.priceMax === 'number') {
            queryBuilder.andWhere('price <= :max', { max: data.priceMax });
        }
        const products = await queryBuilder.getMany();
        if (products.length === 0) {
            throw new common_1.NotFoundException();
        }
        return products;
    }
    async delete(id) {
        const product = await this.findOne(id);
        if (!product) {
            throw new common_1.NotFoundException();
        }
        await this.repository2
            .createQueryBuilder()
            .delete()
            .where('productId = :productId', { productId: product.id })
            .execute();
        product.photoItems = [];
        await this.repository.save(product);
        return this.repository.delete({ id });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(photoItem_entity_1.PhotoItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        category_service_1.CategoryService,
        feature_service_1.FeatureService,
        color_service_1.ColorService,
        material_service_1.MaterialService])
], ProductsService);
//# sourceMappingURL=products.service.js.map