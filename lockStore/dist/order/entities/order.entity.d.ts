import { OrderItemEntity } from './order-item.entity';
import { UserEnitity } from 'src/user/entities/user.entity';
export declare class Order {
    id: number;
    status: string;
    shippingAddress: string;
    totalPrice: number;
    user: UserEnitity;
    orderItems: OrderItemEntity[];
    createdAt: Date;
}
