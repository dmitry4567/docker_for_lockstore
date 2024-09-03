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
exports.UserEnitity = void 0;
const cart_entity_1 = require("../../cart/entities/cart.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const typeorm_1 = require("typeorm");
let UserEnitity = class UserEnitity {
};
exports.UserEnitity = UserEnitity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEnitity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEnitity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEnitity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cart_entity_1.Cart, (cart) => cart.user),
    __metadata("design:type", cart_entity_1.Cart)
], UserEnitity.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.user),
    __metadata("design:type", Array)
], UserEnitity.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.user),
    __metadata("design:type", role_entity_1.Role)
], UserEnitity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserEnitity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserEnitity.prototype, "updateAt", void 0);
exports.UserEnitity = UserEnitity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEnitity);
//# sourceMappingURL=user.entity.js.map