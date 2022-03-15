import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';
import { GetCategoriesArgs } from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';
export declare class CategoriesService {
    private categories;
    create(createCategoryInput: CreateCategoryInput): Category;
    getCategories({ text, first, page, hasType, parent }: GetCategoriesArgs): {
        data: Category[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    getCategory({ id, slug }: GetCategoryArgs): Category;
    update(id: number, updateCategoryInput: UpdateCategoryInput): Category;
    remove(id: number): string;
}
