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
exports.TagsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tags_service_1 = require("./tags.service");
const tag_entity_1 = require("./entities/tag.entity");
const create_tag_input_1 = require("./dto/create-tag.input");
const update_tag_input_1 = require("./dto/update-tag.input");
const get_tags_args_1 = require("./dto/get-tags.args");
const get_tag_args_1 = require("./dto/get-tag.args");
let TagsResolver = class TagsResolver {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    createTag(createTagInput) {
        return this.tagsService.create(createTagInput);
    }
    getTags(getTagsArgs) {
        return this.tagsService.findAll(getTagsArgs);
    }
    findOne(getTagArgs) {
        return this.tagsService.findOne(getTagArgs.id);
    }
    updateTag(updateTagInput) {
        return this.tagsService.update(updateTagInput.id, updateTagInput);
    }
    deleteTag(id) {
        return this.tagsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => tag_entity_1.Tag),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tag_input_1.CreateTagInput]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "createTag", null);
__decorate([
    (0, graphql_1.Query)(() => get_tags_args_1.TagPaginator, { name: 'tags' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tags_args_1.GetTagsArgs]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "getTags", null);
__decorate([
    (0, graphql_1.Query)(() => tag_entity_1.Tag, { name: 'tag', nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tag_args_1.GetTagArgs]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => tag_entity_1.Tag),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tag_input_1.UpdateTagInput]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "updateTag", null);
__decorate([
    (0, graphql_1.Mutation)(() => tag_entity_1.Tag),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TagsResolver.prototype, "deleteTag", null);
TagsResolver = __decorate([
    (0, graphql_1.Resolver)(() => tag_entity_1.Tag),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsResolver);
exports.TagsResolver = TagsResolver;
//# sourceMappingURL=tags.resolver.js.map