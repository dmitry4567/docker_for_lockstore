import { ColorEntity } from 'src/color/entities/color.entity';
import { MaterialEntity } from 'src/material/entities/material.entity';
export declare class ProductSearchDto {
    categoryid?: string;
    featureid?: string;
    colorid?: ColorEntity;
    materialid?: MaterialEntity;
    title?: string;
    priceMin?: number;
    priceMax?: number;
    color?: string;
    material?: string;
    size?: string;
}
