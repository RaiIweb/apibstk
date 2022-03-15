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
exports.CardInput = exports.ConnectProductOrderPivot = exports.UserAddressInput = exports.CreateOrderInput = void 0;
const eager_import_0 = require("./create-order.input");
const eager_import_1 = require("../entities/order.entity");
const graphql_1 = require("@nestjs/graphql");
let CreateOrderInput = class CreateOrderInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { shop_id: { nullable: true, type: () => Number }, coupon_id: { nullable: true, type: () => Number }, status: { type: () => String }, customer_contact: { type: () => String }, products: { type: () => [require("./create-order.input").ConnectProductOrderPivot] }, amount: { type: () => Number }, sales_tax: { type: () => Number }, total: { nullable: true, type: () => Number }, paid_total: { nullable: true, type: () => Number }, payment_id: { nullable: true, type: () => String }, payment_gateway: { nullable: true, type: () => require("../entities/order.entity").PaymentGatewayType }, discount: { nullable: true, type: () => Number }, delivery_fee: { nullable: true, type: () => Number }, delivery_time: { type: () => String }, card: { nullable: true, type: () => require("./create-order.input").CardInput }, billing_address: { nullable: true, type: () => require("./create-order.input").UserAddressInput }, shipping_address: { nullable: true, type: () => require("./create-order.input").UserAddressInput }, use_wallet_points: { nullable: true, type: () => Boolean } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "shop_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "coupon_id", void 0);
CreateOrderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderInput);
exports.CreateOrderInput = CreateOrderInput;
let UserAddressInput = class UserAddressInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { street_address: { type: () => String }, country: { type: () => String }, city: { type: () => String }, state: { type: () => String }, zip: { type: () => String } };
    }
};
UserAddressInput = __decorate([
    (0, graphql_1.InputType)()
], UserAddressInput);
exports.UserAddressInput = UserAddressInput;
let ConnectProductOrderPivot = class ConnectProductOrderPivot {
    static _GRAPHQL_METADATA_FACTORY() {
        return { product_id: { type: () => Number }, variation_option_id: { nullable: true, type: () => Number }, order_quantity: { type: () => Number }, unit_price: { type: () => Number }, subtotal: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ConnectProductOrderPivot.prototype, "product_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ConnectProductOrderPivot.prototype, "variation_option_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ConnectProductOrderPivot.prototype, "order_quantity", void 0);
ConnectProductOrderPivot = __decorate([
    (0, graphql_1.InputType)()
], ConnectProductOrderPivot);
exports.ConnectProductOrderPivot = ConnectProductOrderPivot;
let CardInput = class CardInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { number: { type: () => String }, expiryMonth: { type: () => String }, expiryYear: { type: () => String }, cvv: { type: () => String }, email: { nullable: true, type: () => String } };
    }
};
CardInput = __decorate([
    (0, graphql_1.InputType)()
], CardInput);
exports.CardInput = CardInput;
//# sourceMappingURL=create-order.input.js.map