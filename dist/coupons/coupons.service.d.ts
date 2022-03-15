import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { Coupon } from './entities/coupon.entity';
import { GetCouponsArgs } from './dto/get-coupons.args';
import { GetCouponArgs } from './dto/get-coupon.args';
import { VerifyCouponResponse } from './dto/verify-coupon.input';
export declare class CouponsService {
    private coupons;
    create(createCouponInput: CreateCouponInput): Coupon;
    getCoupons({ text, first, page }: GetCouponsArgs): {
        data: Coupon[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    getCoupon({ id, code }: GetCouponArgs): Coupon;
    update(id: number, updateCouponInput: UpdateCouponInput): Coupon;
    remove(id: number): string;
    verifyCoupon(code: string): VerifyCouponResponse;
}
