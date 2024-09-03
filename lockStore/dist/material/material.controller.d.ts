import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { MaterialService } from './material.service';
export declare class MaterialController {
    private readonly materialService;
    constructor(materialService: MaterialService);
    create(createFeatureDto: CreateMaterialDto): Promise<CreateMaterialDto & import("./entities/material.entity").MaterialEntity>;
    findAll(): Promise<import("./entities/material.entity").MaterialEntity[]>;
    findOne(id: string): Promise<import("./entities/material.entity").MaterialEntity>;
    update(id: string, updateFeatureDto: UpdateMaterialDto): Promise<import("./entities/material.entity").MaterialEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
