import { CreateRoleDto } from './dto/create-role.dto';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRole(dto: CreateRoleDto): Promise<{
        value: string;
        description: string;
    } & Role>;
    getRoleById(id: number): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
