import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
import { FeatureEntity } from './entities/feature.entity';
import { Repository } from 'typeorm';
export declare class FeatureService {
    private featureEntity;
    constructor(featureEntity: Repository<FeatureEntity>);
    create(dto: CreateFeatureDto): Promise<CreateFeatureDto & FeatureEntity>;
    findAll(): Promise<FeatureEntity[]>;
    findOne(id: number): Promise<FeatureEntity>;
    update(id: number, dto: UpdateFeatureDto): Promise<FeatureEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
