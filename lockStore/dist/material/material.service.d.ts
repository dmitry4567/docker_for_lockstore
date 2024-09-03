import { Repository } from 'typeorm';
import { MaterialEntity } from './entities/material.entity';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { CreateMaterialDto } from './dto/create-material.dto';
export declare class MaterialService {
    private materialEntity;
    constructor(materialEntity: Repository<MaterialEntity>);
    create(dto: CreateMaterialDto): Promise<CreateMaterialDto & MaterialEntity>;
    findAll(): Promise<MaterialEntity[]>;
    findOne(id: number): Promise<MaterialEntity>;
    update(id: number, dto: UpdateMaterialDto): Promise<MaterialEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
