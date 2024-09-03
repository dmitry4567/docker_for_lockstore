import { ProductsService } from './products.service';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductSearchDto } from './dto/search-dto';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(dto: CreateProductDto): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findOne(id: string): Promise<ProductEntity>;
    searchProducts(dto: ProductSearchDto): Promise<ProductEntity[]>;
    updateProduct(id: string, dto: UpdateProductDto): Promise<ProductEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
