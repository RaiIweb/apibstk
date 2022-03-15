import { WithdrawsService } from './withdraws.service';
import { Withdraw } from './entities/withdraw.entity';
import { CreateWithdrawInput } from './dto/create-withdraw.input';
import { ApproveWithdrawInput } from './dto/approve-withdraw.input';
import { GetWithdrawsArgs, WithdrawPaginator } from './dto/get-withdraws.args';
export declare class WithdrawsResolver {
    private readonly withdrawsService;
    constructor(withdrawsService: WithdrawsService);
    createWithdraw(createWithdrawInput: CreateWithdrawInput): {
        shop_id: number;
        amount: number;
        details: string;
        note: string;
        payment_method: string;
        id: number;
    };
    getWithdraws(getWithdrawsArgs: GetWithdrawsArgs): Promise<WithdrawPaginator>;
    findOne(id: number): Withdraw;
    approveWithdraw(updateWithdrawInput: ApproveWithdrawInput): Withdraw;
    deleteWithdraw(id: number): string;
}
