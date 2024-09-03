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
exports.WholeSaleEntity = void 0;
const typeorm_1 = require("typeorm");
let WholeSaleEntity = class WholeSaleEntity {
};
exports.WholeSaleEntity = WholeSaleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WholeSaleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WholeSaleEntity.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WholeSaleEntity.prototype, "nameCompany", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WholeSaleEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WholeSaleEntity.prototype, "nameProduct", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WholeSaleEntity.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], WholeSaleEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], WholeSaleEntity.prototype, "installWork", void 0);
exports.WholeSaleEntity = WholeSaleEntity = __decorate([
    (0, typeorm_1.Entity)('wholeSale')
], WholeSaleEntity);
//# sourceMappingURL=whole-sale.entity.js.map