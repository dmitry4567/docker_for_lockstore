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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const cartItem_entitiy_1 = require("../../cart/entities/cartItem.entitiy");
const category_entity_1 = require("../../category/entities/category.entity");
const color_entity_1 = require("../../color/entities/color.entity");
const feature_entity_1 = require("../../feature/entities/feature.entity");
const material_entity_1 = require("../../material/entities/material.entity");
const order_item_entity_1 = require("../../order/entities/order-item.entity");
const typeorm_1 = require("typeorm");
const photoItem_entity_1 = require("../../photo-item/entities/photoItem.entity");
let ProductEntity = class ProductEntity {
};
exports.ProductEntity = ProductEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "oldPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", category_entity_1.CategoryEntity)
], ProductEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => feature_entity_1.FeatureEntity, (feature) => feature.products, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", feature_entity_1.FeatureEntity)
], ProductEntity.prototype, "feature", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.MaterialEntity, (material) => material.products, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", material_entity_1.MaterialEntity)
], ProductEntity.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => color_entity_1.ColorEntity, (color) => color.products, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", color_entity_1.ColorEntity)
], ProductEntity.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cartItem_entitiy_1.CartItem, (cartItem) => cartItem.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "cartItem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItemEntity, (orderItems) => orderItems.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => photoItem_entity_1.PhotoItem, (photoItem) => photoItem.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "photoItems", void 0);
exports.ProductEntity = ProductEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductEntity);
//# sourceMappingURL=product.entity.js.map