import { CreateRefundInput } from './dto/create-refund.input';
import { GetRefundsArgs } from './dto/get-refunds.args';
import { UpdateRefundInput } from './dto/update-refund.input';
export declare class RefundsService {
    create(createRefundInput: CreateRefundInput): {
        order_id: number;
        title: string;
        description: string;
        images?: import("../common/entities/attachment.entity").Attachment[];
        id: number;
    };
    findAll({ first, page }: GetRefundsArgs): {
        data: any[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    findOne(id: number): string;
    update(id: number, updateRefundInput: UpdateRefundInput): string;
    remove(id: number): string;
}
