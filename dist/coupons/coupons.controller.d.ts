import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { GetCouponsDto } from './dto/get-coupons.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    createCoupon(createCouponDto: CreateCouponDto): import("./entities/coupon.entity").Coupon;
    getCoupons(query: GetCouponsDto): {
        count: number;
        currentPage: number;
        firstItem: number;
        lastItem: number;
        lastPage: number;
        perPage: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: import("./entities/coupon.entity").Coupon[];
    };
    getCoupon(id: string): import("./entities/coupon.entity").Coupon;
    verify(id: string): import("./entities/coupon.entity").Coupon;
    updateCoupon(id: string, updateCouponDto: UpdateCouponDto): import("./entities/coupon.entity").Coupon;
    deleteCoupon(id: string): string;
}
