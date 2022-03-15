import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { Coupon } from '../entities/coupon.entity';
export declare class CouponPaginator {
    data: Coupon[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetCouponsArgs extends PaginationArgs {
    orderBy?: QueryCouponsOrderByOrderByClause[];
    text?: string;
}
export declare class QueryCouponsOrderByOrderByClause {
    column: QueryCouponsOrderByColumn;
    order: SortOrder;
}
export declare enum QueryCouponsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    CODE = "CODE",
    AMOUNT = "AMOUNT"
}
