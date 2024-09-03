import { Order } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { OrderItemEntity } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserService } from 'src/user/user.service';
import { CartService } from 'src/cart/cart.service';
export declare class OrderService {
    private orderRepository;
    private orderitemRepository;
    private readonly cartService;
    private readonly userService;
    constructor(orderRepository: Repository<Order>, orderitemRepository: Repository<OrderItemEntity>, cartService: CartService, userService: UserService);
    order(req: any, dto: CreateOrderDto): Promise<Order | 0>;
    getOrdersUser(req: any): Promise<Order[]>;
}
