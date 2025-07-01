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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./schemas/comment.schema");
let CommentsService = class CommentsService {
    commentModel;
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async create(dto) {
        const comment = new this.commentModel({
            text: dto.text,
            user: dto.userId,
            parent: dto.parentId || null,
        });
        return comment.save().then((doc) => {
            return doc.populate(['user', 'parent']);
        });
    }
    async findAll(parentId) {
        const filter = parentId ? { parent: parentId } : { parent: null };
        return this.commentModel.find(filter).populate('user', 'name').populate('parent');
    }
    async findById(id) {
        const comment = await this.commentModel.findById(id).populate('user', 'name').populate('parent');
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        return comment;
    }
    async update(id, dto) {
        const updated = await this.commentModel.findByIdAndUpdate(id, dto, {
            new: true,
        });
        if (!updated)
            throw new common_1.NotFoundException('Comment not found');
        return (await updated.populate('user', 'name')).populate('parent');
    }
    async remove(id) {
        const deleted = await this.commentModel.findByIdAndDelete(id);
        if (!deleted)
            throw new common_1.NotFoundException('Comment not found');
        return { message: 'Comment deleted' };
    }
    async likeComment(id) {
        return this.commentModel.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentsService);
//# sourceMappingURL=comments.service.js.map