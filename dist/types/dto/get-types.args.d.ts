import { SortOrder } from 'src/common/dto/generic-conditions.input';
export declare class GetTypesArgs {
    orderBy?: QueryTypesOrderByOrderByClause[];
    text?: string;
}
export declare class QueryTypesOrderByOrderByClause {
    column: QueryTypesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryTypesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
