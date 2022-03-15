import { BalanceInput, Shop } from '../entities/shop.entity';
declare const CreateShopInput_base: import("@nestjs/common").Type<Pick<Shop, "description" | "settings" | "name" | "address" | "logo" | "cover_image">>;
export declare class CreateShopInput extends CreateShopInput_base {
    categories?: number[];
    balance?: BalanceInput;
}
export declare class ApproveShopInput {
    id: number;
    admin_commission_rate: number;
}
export {};
