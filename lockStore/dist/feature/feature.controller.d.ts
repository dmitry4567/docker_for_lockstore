import { FeatureService } from './feature.service';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { UpdateFeatureDto } from './dto/update-feature.dto';
export declare class FeatureController {
    private readonly featureService;
    constructor(featureService: FeatureService);
    create(createFeatureDto: CreateFeatureDto): Promise<CreateFeatureDto & import("./entities/feature.entity").FeatureEntity>;
    findAll(): Promise<import("./entities/feature.entity").FeatureEntity[]>;
    findOne(id: string): Promise<import("./entities/feature.entity").FeatureEntity>;
    update(id: string, updateFeatureDto: UpdateFeatureDto): Promise<import("./entities/feature.entity").FeatureEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
