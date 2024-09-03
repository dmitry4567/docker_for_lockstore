import { CartItem } from './cartItem.entitiy';
import { UserEnitity } from 'src/user/entities/user.entity';
export declare class Cart {
    id: number;
    user: UserEnitity;
    cartItems: CartItem[];
    getTotalPrice(): number;
}
