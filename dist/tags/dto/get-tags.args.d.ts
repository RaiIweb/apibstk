import { SortOrder, WhereHasConditions, WhereHasConditionsRelation } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Tag } from '../entities/tag.entity';
export declare class TagPaginator {
    data: Tag[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetTagsArgs extends PaginationArgs {
    orderBy?: QueryTagsOrderByOrderByClause[];
    text?: string;
    name?: string;
    hasType?: QueryTagsHasTypeWhereHasConditions;
}
export declare class QueryTagsOrderByOrderByClause {
    column: QueryTagsOrderByColumn;
    order: SortOrder;
}
export declare class QueryTagsHasTypeWhereHasConditions extends WhereHasConditions {
    column: QueryTagsHasTypeColumn;
    AND?: QueryTagsHasTypeWhereHasConditions[];
    OR?: QueryTagsHasTypeWhereHasConditions[];
    HAS?: QueryTagsHasTypeWhereHasConditionsRelation;
}
export declare class QueryTagsHasTypeWhereHasConditionsRelation extends WhereHasConditionsRelation {
    condition: QueryTagsHasTypeWhereHasConditions;
}
export declare enum QueryTagsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
export declare enum QueryTagsHasTypeColumn {
    SLUG = "SLUG"
}
