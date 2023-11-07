import { Model } from "mongoose";
import { CreateUserDto } from 'src/helpers/Dto/create-user.dto';
import { UpdateUserDto } from 'src/helpers/Dto/update-user.dto';
import { IUser } from 'src/helpers/interface/user';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    createUser(CreateUserDto: CreateUserDto): Promise<IUser>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getAllUsers(): Promise<IUser[]>;
    getUser(userId: string): Promise<IUser>;
    deleteUser(userId: string): Promise<IUser>;
}
