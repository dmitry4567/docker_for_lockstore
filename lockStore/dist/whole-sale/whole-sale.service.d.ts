import { CreateWholeSaleDto } from './dto/create-whole-sale.dto';
import { WholeSaleEntity } from './entities/whole-sale.entity';
import { Repository } from 'typeorm';
import { UpdateWholeSaleDto } from './dto/update-whole-sale.dto copy';
export declare class WholeSaleService {
    private wholeSaleRepository;
    constructor(wholeSaleRepository: Repository<WholeSaleEntity>);
    create(dto: CreateWholeSaleDto): Promise<CreateWholeSaleDto & WholeSaleEntity>;
    findAll(): Promise<WholeSaleEntity[]>;
    findOne(id: number): Promise<WholeSaleEntity>;
    update(id: number, dto: UpdateWholeSaleDto): Promise<WholeSaleEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
