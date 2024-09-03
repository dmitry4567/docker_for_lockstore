import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserEnitity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(user: UserEnitity): Promise<{
        token: string;
    }>;
}
