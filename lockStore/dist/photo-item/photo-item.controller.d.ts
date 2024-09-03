/// <reference types="multer" />
import { PhotoItemService } from './photo-item.service';
import { AddPhotosToProductDto } from './dto/add-photo-to-product.dto';
import { UpdatePhotosToProductDto } from './dto/update-photos-to-product.dto';
export declare class PhotoItemController {
    private readonly photoItemService;
    constructor(photoItemService: PhotoItemService);
    uploadPhotos(dto: AddPhotosToProductDto, photos: Express.Multer.File[]): Promise<import("./entities/photoItem.entity").PhotoItem[]>;
    download(path: string, response: any): any;
    findAll(): Promise<import("./entities/photoItem.entity").PhotoItem[]>;
    findOne(id: string): Promise<import("./entities/photoItem.entity").PhotoItem>;
    updatePhotosToProduct(id: string, dto: UpdatePhotosToProductDto, photos: Express.Multer.File[]): Promise<void>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
