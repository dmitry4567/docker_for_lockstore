import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private repository;
    constructor(repository: Repository<CategoryEntity>);
    create(dto: CreateCategoryDto): Promise<CreateCategoryDto & CategoryEntity>;
    findAll(): Promise<CategoryEntity[]>;
    findOne(id: number): Promise<CategoryEntity>;
    update(id: number, dto: UpdateCategoryDto): Promise<CategoryEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
