"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.CouponType = void 0;
const eager_import_0 = require("../../orders/entities/order.entity");
const eager_import_1 = require("./coupon.entity");
const eager_import_2 = require("../../common/entities/attachment.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
var CouponType;
(function (CouponType) {
    CouponType["FIXED_COUPON"] = "fixed";
    CouponType["PERCENTAGE_COUPON"] = "percentage";
    CouponType["FREE_SHIPPING_COUPON"] = "free_shipping";
    CouponType["DEFAULT_COUPON"] = "fixed";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
(0, graphql_1.registerEnumType)(CouponType, { name: 'CouponType' });
let Coupon = class Coupon extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { code: { type: () => String }, description: { nullable: true, type: () => String }, orders: { nullable: true, type: () => [require("../../orders/entities/order.entity").Order] }, type: { type: () => require("./coupon.entity").CouponType }, image: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, is_valid: { type: () => Boolean }, amount: { type: () => Number }, active_from: { type: () => String }, expire_at: { type: () => String } };
    }
};
Coupon = __decorate([
    (0, graphql_1.InputType)('CouponInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Coupon);
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map