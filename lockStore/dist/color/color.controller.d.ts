import { ColorService } from './color.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    create(createFeatureDto: CreateColorDto): Promise<CreateColorDto & import("./entities/color.entity").ColorEntity>;
    findAll(): Promise<import("./entities/color.entity").ColorEntity[]>;
    findOne(id: string): Promise<import("./entities/color.entity").ColorEntity>;
    update(id: string, updateFeatureDto: UpdateColorDto): Promise<import("./entities/color.entity").ColorEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
