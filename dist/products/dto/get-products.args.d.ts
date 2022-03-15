import { SortOrder, WhereHasConditions, WhereHasConditionsRelation } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Product } from '../entities/product.entity';
export declare class ProductPaginator {
    data: Product[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetProductsArgs extends PaginationArgs {
    orderBy?: QueryProductsOrderByOrderByClause[];
    text?: string;
    status?: string;
    shop_id?: number;
    hasType?: QueryProductsHasTypeWhereHasConditions;
    hasCategories?: QueryProductsHasCategoriesWhereHasConditions;
}
export declare class QueryProductsOrderByOrderByClause {
    column: QueryProductsOrderByColumn;
    order: SortOrder;
}
export declare class QueryProductsHasTypeWhereHasConditions extends WhereHasConditions {
    column: QueryProductsHasTypeColumn;
    AND?: QueryProductsHasTypeWhereHasConditions[];
    OR?: QueryProductsHasTypeWhereHasConditions[];
    HAS?: QueryProductsHasTypeWhereHasConditionsRelation;
}
export declare class QueryProductsHasCategoriesWhereHasConditions extends WhereHasConditions {
    column: QueryProductsHasCategoriesColumn;
    AND?: QueryProductsHasCategoriesWhereHasConditions[];
    OR?: QueryProductsHasCategoriesWhereHasConditions[];
    HAS?: QueryProductsHasCategoriesWhereHasConditionsRelation;
}
export declare class QueryProductsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
    condition: QueryProductsHasTypeWhereHasConditions;
}
export declare class QueryProductsHasCategoriesWhereHasConditionsRelation extends WhereHasConditionsRelation {
    condition: QueryProductsHasCategoriesWhereHasConditions;
}
export declare enum QueryProductsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
export declare enum QueryProductsHasTypeColumn {
    SLUG = "SLUG"
}
export declare enum QueryProductsHasCategoriesColumn {
    SLUG = "SLUG"
}
