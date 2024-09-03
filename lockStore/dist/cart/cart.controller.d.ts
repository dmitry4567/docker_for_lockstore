import { CartService } from './cart.service';
import { AddProductToCartDto } from './dto/addProductToCart.dto';
import { UpdateProductToCartDto } from './dto/updateProductToCart.dto';
import { DeleteResult } from 'typeorm';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addProductToCart(dto: AddProductToCartDto, req: any): Promise<import("./entities/cartItem.entitiy").CartItem>;
    getUserCartTotalPrice(req: any): Promise<number>;
    findAll(req: any): Promise<void>;
    findOne(id: string, req: any): Promise<import("./entities/cartItem.entitiy").CartItem>;
    updateProductFromCart(dto: UpdateProductToCartDto, req: any): Promise<import("./entities/cartItem.entitiy").CartItem>;
    delete(id: string, req: any): Promise<DeleteResult>;
}
