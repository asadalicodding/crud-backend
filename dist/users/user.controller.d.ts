import { UserService } from './user.service';
import { CreateUserDto } from 'src/helpers/Dto/create-user.dto';
import { UpdateUserDto } from 'src/helpers/Dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateUser(response: any, userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    getUsers(response: any): Promise<any>;
    getUser(response: any, userId: string): Promise<any>;
    deleteStudent(response: any, userId: string): Promise<any>;
}
