import { SortOrder } from 'src/common/dto/generic-conditions.input';
import { PaginationArgs } from 'src/common/dto/pagination.args';
import { PaginatorInfo } from 'src/common/dto/paginator-info.model';
import { User } from '../entities/user.entity';
export declare class UserPaginator {
    data: User[];
    paginatorInfo: PaginatorInfo;
}
export declare class GetUsersArgs extends PaginationArgs {
    orderBy?: QueryUsersOrderByOrderByClause[];
    text?: string;
}
export declare class QueryUsersOrderByOrderByClause {
    column: QueryUsersOrderByColumn;
    order: SortOrder;
}
export declare enum QueryUsersOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
