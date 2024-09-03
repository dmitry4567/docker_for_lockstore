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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cart_entity_1 = require("./entities/cart.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const products_service_1 = require("../products/products.service");
const cartItem_entitiy_1 = require("./entities/cartItem.entitiy");
let CartService = class CartService {
    constructor(cartRepository, cartItemRepository, productService) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productService = productService;
    }
    async createCart(user) {
        const cart = new cart_entity_1.Cart();
        cart.user = user;
        await this.cartRepository.save(cart);
        return cart;
    }
    async getUserCartTotalPrice(userId) {
        const cart = await this.cartRepository.findOne({
            where: { user: { id: userId } },
            relations: ['cartItems', 'cartItems.product'],
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found for user with ID: ' + userId);
        }
        return cart.getTotalPrice();
    }
    async addProductToCart(dto, user) {
        const product = await this.productService.getProductById(dto.productId);
        if (!product) {
            throw new common_1.NotFoundException('There is no product with this ID: ' + dto.productId);
        }
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user,
            },
        });
        userCart.cartItems.forEach((x) => x.product.title);
        if (userCart.cartItems.some((x) => x.product.id == product.id)) {
            const cItem = userCart.cartItems.find((x) => x.product.id == product.id);
            cItem.Quantity += +dto.quantity;
            cItem.priceProduct = cItem.product.price * cItem.Quantity;
            return await this.cartItemRepository.save(cItem);
        }
        const cartItem = this.cartItemRepository.create({
            product: product,
            Quantity: +dto.quantity,
            priceProduct: product.price * dto.quantity,
        });
        cartItem.cart = userCart;
        return await this.cartItemRepository.save(cartItem);
    }
    async findAll(user) {
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: {
                        photoItems: true,
                    },
                },
            },
            where: {
                user: user.id,
            },
        });
        const data = userCart.cartItems;
        const totalPrice = await this.getUserCartTotalPrice(user.id);
        throw new common_1.HttpException({ totalPrice, data }, common_1.HttpStatus.OK);
    }
    async findOne(productId, user) {
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user.id,
            },
        });
        const product = userCart.cartItems.find((x) => x.id == productId);
        if (!product) {
            throw new common_1.NotFoundException('Cart does not have product ID: ' + productId);
        }
        return product;
    }
    async getUserBasket(user) {
        const userBasket = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user,
            },
        });
        return userBasket;
    }
    async UpdateProductFromCart(dto, user) {
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user.id,
            },
        });
        const cartItem = await this.cartItemRepository.findOne({
            relations: {
                cart: true,
                product: true,
            },
            where: {
                product: await this.productService.getProductById(dto.productId),
                cart: userCart,
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException('There is no product with this ID: ' + dto.productId);
        }
        cartItem.Quantity = dto.quantity;
        cartItem.priceProduct = dto.quantity * cartItem.product.price;
        if (cartItem.Quantity == 0) {
            return await this.cartItemRepository.remove(cartItem);
        }
        const data = await this.cartItemRepository.save(cartItem);
        const updateTotalPrice = await this.getUserCartTotalPrice(user.id);
        throw new common_1.HttpException({ updateTotalPrice, data }, common_1.HttpStatus.OK);
    }
    async remove(productId, user) {
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user.id,
            },
        });
        const cartItem = await this.cartItemRepository.findOne({
            relations: {
                cart: true,
                product: true,
            },
            where: {
                product: await this.productService.getProductById(productId),
                cart: userCart,
            },
        });
        if (!cartItem) {
            throw new common_1.NotFoundException('There is no product with this ID: ' + productId);
        }
        return await this.cartItemRepository.delete(cartItem);
    }
    async removeCartItems(user) {
        const userCart = await this.cartRepository.findOne({
            relations: {
                cartItems: {
                    product: true,
                },
            },
            where: {
                user: user,
            },
        });
        if (!userCart) {
            throw new common_1.NotFoundException();
        }
        await this.cartItemRepository
            .createQueryBuilder()
            .delete()
            .where('cartId = :cartId', { cartId: userCart.id })
            .execute();
        userCart.cartItems = [];
        return await this.cartRepository.save(userCart);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(cartItem_entitiy_1.CartItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        products_service_1.ProductsService])
], CartService);
//# sourceMappingURL=cart.service.js.map