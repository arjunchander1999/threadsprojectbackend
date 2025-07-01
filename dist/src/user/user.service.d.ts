import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    findAll(): Promise<UserDocument[]>;
    findOnebyid(id: string): Promise<UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<any>;
    remove(id: string, user: any): Promise<void>;
    findOne(username: string): Promise<any | undefined>;
    isAdmin(userId: string): Promise<boolean>;
}
