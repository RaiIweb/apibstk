import { CouponsService } from './coupons.service';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { CouponPaginator, GetCouponsArgs } from './dto/get-coupons.args';
import { GetCouponArgs } from './dto/get-coupon.args';
import { VerifyCouponResponse } from './dto/verify-coupon.input';
export declare class CouponsResolver {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    createCoupon(createCouponInput: CreateCouponInput): Coupon;
    getCoupons(getCouponsArgs: GetCouponsArgs): Promise<CouponPaginator>;
    getCoupon(getCouponArgs: GetCouponArgs): Promise<Coupon>;
    updateCoupon(updateCouponInput: UpdateCouponInput): Coupon;
    deleteCoupon(id: number): string;
    verifyCoupon(code: string): VerifyCouponResponse;
}
