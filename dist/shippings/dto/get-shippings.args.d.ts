import { SortOrder } from 'src/common/dto/generic-conditions.input';
export declare class GetShippingsArgs {
    text?: string;
    orderBy?: QueryShippingClassesOrderByOrderByClause[];
}
export declare class QueryShippingClassesOrderByOrderByClause {
    column: QueryShippingClassesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryShippingClassesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    NAME = "NAME",
    AMOUNT = "AMOUNT"
}
