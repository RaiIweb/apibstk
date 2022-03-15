"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCouponResponse = exports.VerifyCouponInput = void 0;
const eager_import_0 = require("../entities/coupon.entity");
const graphql_1 = require("@nestjs/graphql");
let VerifyCouponInput = class VerifyCouponInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { code: { type: () => String } };
    }
};
VerifyCouponInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyCouponInput);
exports.VerifyCouponInput = VerifyCouponInput;
let VerifyCouponResponse = class VerifyCouponResponse {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is_valid: { type: () => Boolean }, coupon: { type: () => require("../entities/coupon.entity").Coupon } };
    }
};
VerifyCouponResponse = __decorate([
    (0, graphql_1.ObjectType)()
], VerifyCouponResponse);
exports.VerifyCouponResponse = VerifyCouponResponse;
//# sourceMappingURL=verify-coupon.input.js.map