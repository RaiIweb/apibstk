import { ConnectTypeBelongsTo } from 'src/categories/dto/create-category.input';
import { Tag } from '../entities/tag.entity';
declare const CreateTagInput_base: import("@nestjs/common").Type<Pick<Tag, "name" | "image" | "details" | "icon">>;
export declare class CreateTagInput extends CreateTagInput_base {
    type?: ConnectTypeBelongsTo;
}
export {};
