"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const coupons_service_1 = require("./coupons.service");
const coupon_entity_1 = require("./entities/coupon.entity");
const create_coupon_input_1 = require("./dto/create-coupon.input");
const update_coupon_input_1 = require("./dto/update-coupon.input");
const get_coupons_args_1 = require("./dto/get-coupons.args");
const get_coupon_args_1 = require("./dto/get-coupon.args");
const verify_coupon_input_1 = require("./dto/verify-coupon.input");
let CouponsResolver = class CouponsResolver {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    createCoupon(createCouponInput) {
        return this.couponsService.create(createCouponInput);
    }
    async getCoupons(getCouponsArgs) {
        return this.couponsService.getCoupons(getCouponsArgs);
    }
    async getCoupon(getCouponArgs) {
        return this.couponsService.getCoupon(getCouponArgs);
    }
    updateCoupon(updateCouponInput) {
        return this.couponsService.update(updateCouponInput.id, updateCouponInput);
    }
    deleteCoupon(id) {
        return this.couponsService.remove(id);
    }
    verifyCoupon(code) {
        return this.couponsService.verifyCoupon(code);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => coupon_entity_1.Coupon),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_input_1.CreateCouponInput]),
    __metadata("design:returntype", void 0)
], CouponsResolver.prototype, "createCoupon", null);
__decorate([
    (0, graphql_1.Query)(() => get_coupons_args_1.CouponPaginator, { name: 'coupons' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_coupons_args_1.GetCouponsArgs]),
    __metadata("design:returntype", Promise)
], CouponsResolver.prototype, "getCoupons", null);
__decorate([
    (0, graphql_1.Query)(() => coupon_entity_1.Coupon, { name: 'coupon' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_coupon_args_1.GetCouponArgs]),
    __metadata("design:returntype", Promise)
], CouponsResolver.prototype, "getCoupon", null);
__decorate([
    (0, graphql_1.Mutation)(() => coupon_entity_1.Coupon),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_coupon_input_1.UpdateCouponInput]),
    __metadata("design:returntype", void 0)
], CouponsResolver.prototype, "updateCoupon", null);
__decorate([
    (0, graphql_1.Mutation)(() => coupon_entity_1.Coupon),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CouponsResolver.prototype, "deleteCoupon", null);
__decorate([
    (0, graphql_1.Mutation)(() => verify_coupon_input_1.VerifyCouponResponse),
    __param(0, (0, graphql_1.Args)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", verify_coupon_input_1.VerifyCouponResponse)
], CouponsResolver.prototype, "verifyCoupon", null);
CouponsResolver = __decorate([
    (0, graphql_1.Resolver)(() => coupon_entity_1.Coupon),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsResolver);
exports.CouponsResolver = CouponsResolver;
//# sourceMappingURL=coupons.resolver.js.map