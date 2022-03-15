import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Withdraw } from '../entities/withdraw.entity';
export declare class WithdrawPaginator {
    data: Withdraw[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetWithdrawsArgs extends PaginationArgs {
    orderBy?: string;
    sortedBy?: string;
    status?: string;
    shop_id?: number;
}
