import { UserEnitity } from 'src/user/entities/user.entity';
import { Cart } from './entities/cart.entity';
import { DeleteResult, Repository } from 'typeorm';
import { AddProductToCartDto } from './dto/addProductToCart.dto';
import { ProductsService } from 'src/products/products.service';
import { CartItem } from './entities/cartItem.entitiy';
import { UpdateProductToCartDto } from './dto/updateProductToCart.dto';
export declare class CartService {
    private readonly cartRepository;
    private readonly cartItemRepository;
    private readonly productService;
    constructor(cartRepository: Repository<Cart>, cartItemRepository: Repository<CartItem>, productService: ProductsService);
    createCart(user: UserEnitity): Promise<Cart>;
    getUserCartTotalPrice(userId: number): Promise<number>;
    addProductToCart(dto: AddProductToCartDto, user: any): Promise<CartItem>;
    findAll(user: any): Promise<void>;
    findOne(productId: number, user: any): Promise<CartItem>;
    getUserBasket(user: any): Promise<Cart>;
    UpdateProductFromCart(dto: UpdateProductToCartDto, user: any): Promise<CartItem>;
    remove(productId: number, user: any): Promise<DeleteResult>;
    removeCartItems(user: any): Promise<Cart>;
}
