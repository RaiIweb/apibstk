import { CreateTagInput } from './dto/create-tag.input';
import { GetTagsArgs } from './dto/get-tags.args';
import { UpdateTagInput } from './dto/update-tag.input';
import { Tag } from './entities/tag.entity';
export declare class TagsService {
    private tags;
    create({ type, ...createTagInput }: CreateTagInput): {
        created_at: Date;
        updated_at: Date;
        name: string;
        image?: import("../common/entities/attachment.entity").Attachment;
        details?: string;
        icon?: string;
        id: number;
        slug: string;
    };
    findAll({ page, first }: GetTagsArgs): {
        data: Tag[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    findOne(id: number): Tag;
    update(id: number, updateTagInput: UpdateTagInput): Tag;
    remove(id: number): string;
}
