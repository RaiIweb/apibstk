import { Category } from '../entities/category.entity';
export declare class ConnectTypeBelongsTo {
    connect: number;
}
declare const CreateCategoryInput_base: import("@nestjs/common").Type<Pick<Category, "name" | "image" | "details" | "icon">>;
export declare class CreateCategoryInput extends CreateCategoryInput_base {
    parent?: number;
    type?: ConnectTypeBelongsTo;
}
export {};
