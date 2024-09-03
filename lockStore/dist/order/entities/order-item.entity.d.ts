import { Order } from 'src/order/entities/order.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
export declare class OrderItemEntity {
    id: number;
    orderPrice: number;
    order: Order;
    product: ProductEntity;
}
