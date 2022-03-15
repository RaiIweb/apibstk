import { TagsService } from './tags.service';
import { Tag } from './entities/tag.entity';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';
import { GetTagsArgs } from './dto/get-tags.args';
import { GetTagArgs } from './dto/get-tag.args';
export declare class TagsResolver {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    createTag(createTagInput: CreateTagInput): {
        created_at: Date;
        updated_at: Date;
        name: string;
        image?: import("../common/entities/attachment.entity").Attachment;
        details?: string;
        icon?: string;
        id: number;
        slug: string;
    };
    getTags(getTagsArgs: GetTagsArgs): {
        data: Tag[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    findOne(getTagArgs: GetTagArgs): Tag;
    updateTag(updateTagInput: UpdateTagInput): Tag;
    deleteTag(id: number): string;
}
