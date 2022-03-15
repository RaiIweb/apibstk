import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoryPaginator, GetCategoriesArgs } from './dto/get-categories.args';
import { GetCategoryArgs } from './dto/get-category.args';
export declare class CategoriesResolver {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryInput: CreateCategoryInput): Category;
    getCategories(getCategoriesArgs: GetCategoriesArgs): Promise<CategoryPaginator>;
    getCategory(getCategoryArgs: GetCategoryArgs): Promise<Category>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Category;
    deleteCategory(id: number): string;
}
