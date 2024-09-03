"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const order_item_entity_1 = require("./entities/order-item.entity");
const user_service_1 = require("../user/user.service");
const cart_service_1 = require("../cart/cart.service");
let OrderService = class OrderService {
    constructor(orderRepository, orderitemRepository, cartService, userService) {
        this.orderRepository = orderRepository;
        this.orderitemRepository = orderitemRepository;
        this.cartService = cartService;
        this.userService = userService;
    }
    async order(req, dto) {
        const userBasket = await this.cartService.getUserBasket(req.user);
        if (userBasket.cartItems.length == 0) {
            throw new common_1.BadRequestException('You cannot create an order with an empty cart');
        }
        const order = this.orderRepository.create({
            status: dto.status,
            shippingAddress: dto.shippingAddress,
            totalPrice: 0,
            user: req.user,
            orderItems: [],
        });
        await this.orderRepository.save(order);
        for (let i = 0; i <= userBasket.cartItems.length; i++) {
            if (userBasket.cartItems[i] && userBasket.cartItems[i].product) {
                const orderItem = this.orderitemRepository.create({
                    product: userBasket.cartItems[i].product,
                });
                orderItem.orderPrice = userBasket.cartItems[i].priceProduct;
                await this.orderitemRepository.save(orderItem);
                order.orderItems.push(orderItem);
            }
        }
        if (order.orderItems == null) {
            return 0;
        }
        let sum = 0;
        order.orderItems.forEach((a) => (sum += a.orderPrice));
        order.totalPrice = sum;
        order.user = req.user;
        const orderNew = await this.orderRepository.save(order);
        await this.cartService.removeCartItems(req.user);
        return orderNew;
    }
    async getOrdersUser(req) {
        const userOrder = await this.orderRepository.find({
            relations: {
                orderItems: {
                    product: true,
                },
            },
            where: {
                user: req.user,
            },
        });
        return userOrder;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(order_item_entity_1.OrderItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        cart_service_1.CartService,
        user_service_1.UserService])
], OrderService);
//# sourceMappingURL=order.service.js.map