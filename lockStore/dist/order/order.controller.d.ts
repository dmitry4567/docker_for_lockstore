import { OrderService } from 'src/order/order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    makeOrder(dto: CreateOrderDto, req: any): Promise<import("./entities/order.entity").Order | 0>;
    getItemsFromOrder(req: any): Promise<import("./entities/order.entity").Order[]>;
}
