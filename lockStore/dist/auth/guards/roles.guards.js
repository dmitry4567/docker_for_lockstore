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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const role_decorator_1 = require("../../decorators/role.decorator");
const config_1 = require("@nestjs/config");
let RolesGuard = class RolesGuard {
    constructor(jwtService, reflector, configService) {
        this.jwtService = jwtService;
        this.reflector = reflector;
        this.configService = configService;
    }
    canActivate(context) {
        try {
            const requiredRole = this.reflector.getAllAndOverride(role_decorator_1.ROLE_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);
            if (!requiredRole) {
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.UnauthorizedException({
                    message: 'Пользователь не авторизован',
                });
            }
            const secretKey = this.configService.get('JWT_SECRET');
            const user = this.jwtService.verify(token, { secret: secretKey });
            req.user = user;
            if (user.role.value) {
                return user.role.value === requiredRole;
            }
            else {
                return false;
            }
        }
        catch (e) {
            throw new common_1.HttpException('Нет доступа', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector,
        config_1.ConfigService])
], RolesGuard);
//# sourceMappingURL=roles.guards.js.map