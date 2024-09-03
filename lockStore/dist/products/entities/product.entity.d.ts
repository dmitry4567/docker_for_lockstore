import { CartItem } from 'src/cart/entities/cartItem.entitiy';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { ColorEntity } from 'src/color/entities/color.entity';
import { FeatureEntity } from 'src/feature/entities/feature.entity';
import { MaterialEntity } from 'src/material/entities/material.entity';
import { OrderItemEntity } from 'src/order/entities/order-item.entity';
import { PhotoItem } from '../../photo-item/entities/photoItem.entity';
export declare class ProductEntity {
    id: number;
    title: string;
    rate: number;
    price: number;
    oldPrice: number;
    category: CategoryEntity;
    feature: FeatureEntity;
    material: MaterialEntity;
    color: ColorEntity;
    cartItem: CartItem[];
    orderItems: OrderItemEntity[];
    photoItems: PhotoItem[];
}
