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
var Order_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.PaymentGatewayType = void 0;
const eager_import_0 = require("../../users/entities/user.entity");
const eager_import_1 = require("./order.entity");
const eager_import_2 = require("./order-status.entity");
const eager_import_3 = require("../../coupons/entities/coupon.entity");
const eager_import_4 = require("../../shops/entities/shop.entity");
const eager_import_5 = require("../../products/entities/product.entity");
const eager_import_6 = require("../../addresses/entities/address.entity");
const eager_import_7 = require("../../refunds/entities/refund.entity");
const graphql_1 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const address_entity_1 = require("../../addresses/entities/address.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const coupon_entity_1 = require("../../coupons/entities/coupon.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const refund_entity_1 = require("../../refunds/entities/refund.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var PaymentGatewayType;
(function (PaymentGatewayType) {
    PaymentGatewayType["STRIPE"] = "stripe";
    PaymentGatewayType["CASH_ON_DELIVERY"] = "cod";
})(PaymentGatewayType = exports.PaymentGatewayType || (exports.PaymentGatewayType = {}));
(0, graphql_1.registerEnumType)(PaymentGatewayType, { name: 'PaymentGatewayType' });
let Order = Order_1 = class Order extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { tracking_number: { type: () => String }, customer_id: { type: () => Number }, customer_contact: { type: () => String }, customer: { type: () => require("../../users/entities/user.entity").User }, parent_order: { nullable: true, type: () => require("./order.entity").Order }, children: { type: () => [require("./order.entity").Order] }, status: { type: () => require("./order-status.entity").OrderStatus }, amount: { type: () => Number }, sales_tax: { type: () => Number }, total: { type: () => Number }, paid_total: { type: () => Number }, payment_id: { nullable: true, type: () => String }, payment_gateway: { type: () => require("./order.entity").PaymentGatewayType }, coupon: { nullable: true, type: () => require("../../coupons/entities/coupon.entity").Coupon }, shop: { type: () => require("../../shops/entities/shop.entity").Shop }, discount: { nullable: true, type: () => Number }, delivery_fee: { type: () => Number }, delivery_time: { type: () => String }, products: { type: () => [require("../../products/entities/product.entity").Product] }, billing_address: { type: () => require("../../addresses/entities/address.entity").UserAddress }, shipping_address: { type: () => require("../../addresses/entities/address.entity").UserAddress }, refund: { nullable: true, type: () => require("../../refunds/entities/refund.entity").Refund }, wallet_point: { nullable: true, type: () => WalletPoint } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Order.prototype, "customer_id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Order_1),
    __metadata("design:type", Order)
], Order.prototype, "parent_order", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Order_1),
    __metadata("design:type", Array)
], Order.prototype, "children", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => product_entity_1.Product),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
Order = Order_1 = __decorate([
    (0, graphql_1.InputType)('OrderInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Order);
exports.Order = Order;
let WalletPoint = class WalletPoint {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, amount: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], WalletPoint.prototype, "id", void 0);
WalletPoint = __decorate([
    (0, graphql_1.InputType)('WalletPointInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], WalletPoint);
//# sourceMappingURL=order.entity.js.map