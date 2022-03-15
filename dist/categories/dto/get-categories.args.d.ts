import { SortOrder, WhereHasConditions, WhereHasConditionsRelation } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Category } from '../entities/category.entity';
export declare class CategoryPaginator {
    data: Category[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetCategoriesArgs extends PaginationArgs {
    orderBy?: QueryCategoriesOrderByOrderByClause[];
    text?: string;
    hasType?: QueryCategoriesHasTypeWhereHasConditions;
    name?: string;
    parent?: number;
}
export declare class QueryCategoriesOrderByOrderByClause {
    column: QueryCategoriesOrderByColumn;
    order: SortOrder;
}
export declare class QueryCategoriesHasTypeWhereHasConditions extends WhereHasConditions {
    column: QueryCategoriesHasTypeColumn;
    AND?: QueryCategoriesHasTypeWhereHasConditions[];
    OR?: QueryCategoriesHasTypeWhereHasConditions[];
    HAS?: QueryCategoriesHasTypeWhereHasConditionsRelation;
}
export declare class QueryCategoriesHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
    condition: QueryCategoriesHasTypeWhereHasConditions;
}
export declare enum QueryCategoriesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
export declare enum QueryCategoriesHasTypeColumn {
    SLUG = "SLUG"
}
