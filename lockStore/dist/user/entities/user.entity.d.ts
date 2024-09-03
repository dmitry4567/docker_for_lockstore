import { Cart } from 'src/cart/entities/cart.entity';
import { Order } from 'src/order/entities/order.entity';
import { Role } from 'src/role/entities/role.entity';
export declare class UserEnitity {
    id: number;
    email: string;
    password: string;
    cart: Cart;
    orders: Order[];
    role: Role;
    createAt: Date;
    updateAt: Date;
}
