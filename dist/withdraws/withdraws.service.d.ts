import { CreateWithdrawInput } from './dto/create-withdraw.input';
import { GetWithdrawsArgs, WithdrawPaginator } from './dto/get-withdraws.args';
import { ApproveWithdrawInput } from './dto/approve-withdraw.input';
import { Withdraw } from './entities/withdraw.entity';
export declare class WithdrawsService {
    private withdraws;
    create(createWithdrawInput: CreateWithdrawInput): {
        shop_id: number;
        amount: number;
        details: string;
        note: string;
        payment_method: string;
        id: number;
    };
    getWithdraws({ first, page, status, shop_id, }: GetWithdrawsArgs): WithdrawPaginator;
    findOne(id: number): Withdraw;
    update(id: number, updateWithdrawInput: ApproveWithdrawInput): Withdraw;
    remove(id: number): string;
}
