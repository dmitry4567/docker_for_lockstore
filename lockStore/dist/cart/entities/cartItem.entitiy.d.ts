import { ProductEntity } from 'src/products/entities/product.entity';
import { Cart } from './cart.entity';
export declare class CartItem {
    id: number;
    Quantity: number;
    priceProduct: number;
    product: ProductEntity;
    cart: Cart;
}
