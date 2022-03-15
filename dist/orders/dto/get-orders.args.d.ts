import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Order } from '../entities/order.entity';
export declare class OrderPaginator {
    data: Order[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetOrdersArgs extends PaginationArgs {
    tracking_number?: string;
    orderBy?: string;
    sortedBy?: string;
    customer_id?: number;
    shop_id?: number;
}
