import { UpdateProductDto } from './dto/update-product.dto';
import { DeleteResult, Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductSearchDto } from './dto/search-dto';
import { PhotoItem } from '../photo-item/entities/photoItem.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CategoryService } from 'src/category/category.service';
import { FeatureService } from 'src/feature/feature.service';
import { ColorService } from 'src/color/color.service';
import { MaterialService } from 'src/material/material.service';
export declare class ProductsService {
    private repository;
    private repository2;
    private readonly categoryService;
    private readonly featureService;
    private readonly colorService;
    private readonly materialService;
    constructor(repository: Repository<ProductEntity>, repository2: Repository<PhotoItem>, categoryService: CategoryService, featureService: FeatureService, colorService: ColorService, materialService: MaterialService);
    create(dto: CreateProductDto): Promise<ProductEntity>;
    getProductById(id: number): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    update(id: number, dto: UpdateProductDto): Promise<ProductEntity>;
    searchProducts(data: ProductSearchDto): Promise<ProductEntity[]>;
    delete(id: number): Promise<DeleteResult>;
}
