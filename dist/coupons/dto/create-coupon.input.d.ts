import { Coupon } from '../entities/coupon.entity';
declare const CreateCouponInput_base: import("@nestjs/common").Type<Pick<Coupon, "description" | "type" | "image" | "amount" | "code" | "expire_at" | "active_from">>;
export declare class CreateCouponInput extends CreateCouponInput_base {
}
export {};
