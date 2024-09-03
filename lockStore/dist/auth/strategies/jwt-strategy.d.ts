import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: {
        id: string;
        role: string;
    }): Promise<{
        id: number;
        role: import("../../role/entities/role.entity").Role;
    }>;
}
export {};
