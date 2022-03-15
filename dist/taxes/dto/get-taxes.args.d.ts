import { SortOrder } from 'src/common/dto/generic-conditions.input';
export declare class GetTaxesArgs {
    text?: string;
    orderBy?: QueryTaxClassesOrderByOrderByClause[];
}
export declare class QueryTaxClassesOrderByOrderByClause {
    column: QueryTaxClassesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryTaxClassesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    NAME = "NAME",
    RATE = "RATE"
}
