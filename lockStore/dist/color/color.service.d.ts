import { Repository } from 'typeorm';
import { ColorEntity } from './entities/color.entity';
import { UpdateColorDto } from './dto/update-color.dto';
import { CreateColorDto } from './dto/create-color.dto';
export declare class ColorService {
    private colorEntity;
    constructor(colorEntity: Repository<ColorEntity>);
    create(dto: CreateColorDto): Promise<CreateColorDto & ColorEntity>;
    findAll(): Promise<ColorEntity[]>;
    findOne(id: number): Promise<ColorEntity>;
    update(id: number, dto: UpdateColorDto): Promise<ColorEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
