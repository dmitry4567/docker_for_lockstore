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
exports.ColorEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("../../products/entities/product.entity");
const typeorm_1 = require("typeorm");
let ColorEntity = class ColorEntity {
};
exports.ColorEntity = ColorEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ColorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ColorEntity.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    (0, typeorm_1.OneToMany)(() => product_entity_1.ProductEntity, (product) => product.color),
    __metadata("design:type", Array)
], ColorEntity.prototype, "products", void 0);
exports.ColorEntity = ColorEntity = __decorate([
    (0, typeorm_1.Entity)('color')
], ColorEntity);
//# sourceMappingURL=color.entity.js.map