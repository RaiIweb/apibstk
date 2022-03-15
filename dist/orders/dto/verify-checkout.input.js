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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedCheckoutData = exports.CheckoutVerificationInput = void 0;
const eager_import_0 = require("./create-order.input");
const graphql_1 = require("@nestjs/graphql");
let CheckoutVerificationInput = class CheckoutVerificationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { amount: { type: () => Number }, products: { type: () => [require("./create-order.input").ConnectProductOrderPivot] }, billing_address: { nullable: true, type: () => require("./create-order.input").UserAddressInput }, shipping_address: { nullable: true, type: () => require("./create-order.input").UserAddressInput } };
    }
};
CheckoutVerificationInput = __decorate([
    (0, graphql_1.InputType)()
], CheckoutVerificationInput);
exports.CheckoutVerificationInput = CheckoutVerificationInput;
let VerifiedCheckoutData = class VerifiedCheckoutData {
    static _GRAPHQL_METADATA_FACTORY() {
        return { total_tax: { type: () => Number }, shipping_charge: { type: () => Number }, unavailable_products: { type: () => [Number] }, wallet_amount: { type: () => Number }, wallet_currency: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID]),
    __metadata("design:type", Array)
], VerifiedCheckoutData.prototype, "unavailable_products", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], VerifiedCheckoutData.prototype, "wallet_amount", void 0);
VerifiedCheckoutData = __decorate([
    (0, graphql_1.ObjectType)()
], VerifiedCheckoutData);
exports.VerifiedCheckoutData = VerifiedCheckoutData;
//# sourceMappingURL=verify-checkout.input.js.map