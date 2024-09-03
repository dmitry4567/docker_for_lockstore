"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoItemModule = void 0;
const common_1 = require("@nestjs/common");
const photo_item_service_1 = require("./photo-item.service");
const photo_item_controller_1 = require("./photo-item.controller");
const config_1 = require("@nestjs/config");
const dist_1 = require("@nestjs/typeorm/dist");
const photoItem_entity_1 = require("./entities/photoItem.entity");
const jwt_1 = require("@nestjs/jwt");
const products_module_1 = require("../products/products.module");
let PhotoItemModule = class PhotoItemModule {
};
exports.PhotoItemModule = PhotoItemModule;
exports.PhotoItemModule = PhotoItemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            dist_1.TypeOrmModule.forFeature([photoItem_entity_1.PhotoItem]),
            products_module_1.ProductsModule,
            jwt_1.JwtModule,
        ],
        controllers: [photo_item_controller_1.PhotoItemController],
        providers: [photo_item_service_1.PhotoItemService],
    })
], PhotoItemModule);
//# sourceMappingURL=photo-item.module.js.map