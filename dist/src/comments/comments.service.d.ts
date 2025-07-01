import { Model, Types } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<CommentDocument>);
    create(dto: CreateCommentDto): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    findAll(parentId?: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    update(id: string, dto: UpdateCommentDto): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>, never>>;
    remove(id: string): Promise<{
        message: string;
    }>;
    likeComment(id: string): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}> & import("mongoose").Document<unknown, {}, Comment, {}> & Comment & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    } & Required<{
        _id: Types.ObjectId;
    }>) | null>;
}
