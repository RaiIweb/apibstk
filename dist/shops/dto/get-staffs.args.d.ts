import { PaginationArgs } from 'src/common/dto/pagination.args';
export declare class GetStaffsArgs extends PaginationArgs {
    orderBy?: string;
    sortedBy?: string;
    shop_id?: number;
}
