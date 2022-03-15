import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Refund } from '../entities/refund.entity';
export declare class RefundPaginator {
    data: Refund[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetRefundsArgs extends PaginationArgs {
    orderBy?: string;
    sortedBy?: string;
    customer_id?: number;
    shop_id?: number;
    order_id?: number;
}
