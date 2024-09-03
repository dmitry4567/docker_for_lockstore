"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const product_entity_1 = require("./entities/product.entity");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../category/entities/category.entity");
const category_module_1 = require("../category/category.module");
const jwt_1 = require("@nestjs/jwt");
const photoItem_entity_1 = require("../photo-item/entities/photoItem.entity");
const feature_module_1 = require("../feature/feature.module");
const material_module_1 = require("../material/material.module");
const color_module_1 = require("../color/color.module");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.ProductEntity, photoItem_entity_1.PhotoItem, category_entity_1.CategoryEntity]),
            category_module_1.CategoryModule,
            feature_module_1.FeatureModule,
            material_module_1.MaterialModule,
            color_module_1.ColorModule,
            jwt_1.JwtModule,
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
        exports: [products_service_1.ProductsService],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map