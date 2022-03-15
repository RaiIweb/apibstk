import { Withdraw } from '../entities/withdraw.entity';
declare const CreateWithdrawInput_base: import("@nestjs/common").Type<Pick<Withdraw, "shop_id" | "amount" | "details" | "note" | "payment_method">>;
export declare class CreateWithdrawInput extends CreateWithdrawInput_base {
}
export {};
