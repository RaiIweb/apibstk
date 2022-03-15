import { Attachment } from 'src/common/entities/attachment.entity';
export declare class CreateRefundInput {
    order_id: number;
    title: string;
    description: string;
    images?: Attachment[];
}
