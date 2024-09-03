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
exports.WholeSaleService = void 0;
const common_1 = require("@nestjs/common");
const whole_sale_entity_1 = require("./entities/whole-sale.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let WholeSaleService = class WholeSaleService {
    constructor(wholeSaleRepository) {
        this.wholeSaleRepository = wholeSaleRepository;
    }
    async create(dto) {
        return this.wholeSaleRepository.save(dto);
    }
    async findAll() {
        return this.wholeSaleRepository.find();
    }
    async findOne(id) {
        return this.wholeSaleRepository.findOneBy({
            id,
        });
    }
    async update(id, dto) {
        const toUpdate = await this.wholeSaleRepository.findOneBy({ id });
        if (!toUpdate) {
            throw new common_1.BadRequestException(`Запись с id=${id} не найдена`);
        }
        if (dto.count) {
            toUpdate.count = dto.count;
        }
        if (dto.firstname) {
            toUpdate.firstname = dto.firstname;
        }
        if (dto.installWork !== undefined) {
            toUpdate.installWork = dto.installWork;
        }
        if (dto.logo !== undefined) {
            toUpdate.logo = dto.logo;
        }
        if (dto.nameCompany) {
            toUpdate.nameCompany = dto.nameCompany;
        }
        if (dto.nameProduct) {
            toUpdate.nameProduct = dto.nameProduct;
        }
        if (dto.phone) {
            toUpdate.phone = dto.phone;
        }
        return this.wholeSaleRepository.save(toUpdate);
    }
    async remove(id) {
        return this.wholeSaleRepository.delete(id);
    }
};
exports.WholeSaleService = WholeSaleService;
exports.WholeSaleService = WholeSaleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(whole_sale_entity_1.WholeSaleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WholeSaleService);
//# sourceMappingURL=whole-sale.service.js.map