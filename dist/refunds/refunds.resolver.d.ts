import { RefundsService } from './refunds.service';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundInput } from './dto/update-refund.input';
import { GetRefundsArgs } from './dto/get-refunds.args';
export declare class RefundsResolver {
    private readonly refundsService;
    constructor(refundsService: RefundsService);
    createRefund(createRefundInput: CreateRefundInput): {
        order_id: number;
        title: string;
        description: string;
        images?: import("../common/entities/attachment.entity").Attachment[];
        id: number;
    };
    findAll(getRefundsArgs: GetRefundsArgs): {
        data: any[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    findOne(id: number): string;
    updateRefund(updateRefundInput: UpdateRefundInput): string;
    deleteRefund(id: number): string;
}
