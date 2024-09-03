import { WholeSaleService } from './whole-sale.service';
import { CreateWholeSaleDto } from './dto/create-whole-sale.dto';
import { UpdateWholeSaleDto } from './dto/update-whole-sale.dto copy';
export declare class WholeSaleController {
    private readonly wholeSaleService;
    constructor(wholeSaleService: WholeSaleService);
    create(createWholeSaleDto: CreateWholeSaleDto): Promise<CreateWholeSaleDto & import("./entities/whole-sale.entity").WholeSaleEntity>;
    findAll(): Promise<import("./entities/whole-sale.entity").WholeSaleEntity[]>;
    findOne(id: string): Promise<import("./entities/whole-sale.entity").WholeSaleEntity>;
    update(id: string, updateFeatureDto: UpdateWholeSaleDto): Promise<import("./entities/whole-sale.entity").WholeSaleEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
