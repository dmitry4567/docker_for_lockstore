import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult, Repository } from 'typeorm';
import { UserEnitity } from './entities/user.entity';
import { CartService } from 'src/cart/cart.service';
import { RoleService } from 'src/role/role.service';
export declare class UserService {
    private readonly userRepository;
    private readonly cartService;
    private readonly roleService;
    private readonly hashSaltRounds;
    constructor(userRepository: Repository<UserEnitity>, cartService: CartService, roleService: RoleService);
    create(dto: CreateUserDto): Promise<UserEnitity>;
    findByEmail(email: string): Promise<UserEnitity>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    findById(id: number): Promise<UserEnitity>;
    remove(req: any): Promise<DeleteResult>;
}
