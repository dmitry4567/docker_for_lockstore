/// <reference types="multer" />
import { AddPhotosToProductDto } from './dto/add-photo-to-product.dto';
import { PhotoItem } from 'src/photo-item/entities/photoItem.entity';
import { UpdatePhotosToProductDto } from './dto/update-photos-to-product.dto';
import { ProductsService } from 'src/products/products.service';
import { DeleteResult, Repository } from 'typeorm';
export declare class PhotoItemService {
    private photoItemRepository;
    private productSerive;
    constructor(photoItemRepository: Repository<PhotoItem>, productSerive: ProductsService);
    uploadPhotos(dto: AddPhotosToProductDto, photos: Express.Multer.File[]): Promise<PhotoItem[]>;
    findAll(): Promise<PhotoItem[]>;
    findOne(id: number): Promise<PhotoItem>;
    updatePhotosToProduct(id: number, dto: UpdatePhotosToProductDto, photos: Express.Multer.File[]): Promise<void>;
    delete(id: number): Promise<DeleteResult>;
}
