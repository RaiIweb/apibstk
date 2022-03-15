import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { OrderStatus } from '../entities/order-status.entity';
export declare class OrderStatusPaginator {
    data: OrderStatus[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetOrderStatusesArgs extends PaginationArgs {
    orderBy?: QueryOrderStatusesOrderByOrderByClause[];
    text?: string;
}
export declare class QueryOrderStatusesOrderByOrderByClause {
    column?: QueryOrderStatusesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryOrderStatusesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
