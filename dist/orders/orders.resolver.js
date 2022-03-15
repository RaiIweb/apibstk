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
exports.OrdersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const orders_service_1 = require("./orders.service");
const order_entity_1 = require("./entities/order.entity");
const create_order_input_1 = require("./dto/create-order.input");
const update_order_input_1 = require("./dto/update-order.input");
const get_orders_args_1 = require("./dto/get-orders.args");
const verify_checkout_input_1 = require("./dto/verify-checkout.input");
const order_status_entity_1 = require("./entities/order-status.entity");
const get_order_statuses_args_1 = require("./dto/get-order-statuses.args");
const get_order_args_1 = require("./dto/get-order.args");
const create_order_status_input_1 = require("./dto/create-order-status.input");
let OrdersResolver = class OrdersResolver {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    createOrder(createOrderInput) {
        return this.ordersService.create(createOrderInput);
    }
    getOrders(ordersArgs) {
        return this.ordersService.getOrders(ordersArgs);
    }
    getOrderStatuses(orderStatusesArgs) {
        return this.ordersService.getOrderStatuses(orderStatusesArgs);
    }
    findOne(orderArgs) {
        return this.ordersService.getOrder(orderArgs);
    }
    getOrderStatus(id) {
        return this.ordersService.getOrderStatus(id);
    }
    updateOrder(updateOrderInput) {
        return this.ordersService.update(updateOrderInput.id, updateOrderInput);
    }
    deleteOrder(id) {
        return this.ordersService.remove(id);
    }
    verifyCheckout(checkoutVerificationInput) {
        return this.ordersService.verifyCheckout(checkoutVerificationInput);
    }
    createOrderStatus(createOrderStatusInput) {
        return this.ordersService.createOrderStatus(createOrderStatusInput);
    }
    updateOrderStatus(updateOrderStatusInput) {
        return this.ordersService.updateOrderStatus(updateOrderStatusInput);
    }
    deleteOrderStatus(id) {
        return this.ordersService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Query)(() => get_orders_args_1.OrderPaginator, { name: 'orders' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_orders_args_1.GetOrdersArgs]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "getOrders", null);
__decorate([
    (0, graphql_1.Query)(() => get_order_statuses_args_1.OrderStatusPaginator, { name: 'orderStatuses' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_order_statuses_args_1.GetOrderStatusesArgs]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "getOrderStatuses", null);
__decorate([
    (0, graphql_1.Query)(() => order_entity_1.Order, { name: 'order' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_order_args_1.GetOrderArgs]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => order_status_entity_1.OrderStatus, { name: 'orderStatus' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "getOrderStatus", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_input_1.UpdateOrderInput]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "updateOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_entity_1.Order),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "deleteOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => verify_checkout_input_1.VerifiedCheckoutData),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_checkout_input_1.CheckoutVerificationInput]),
    __metadata("design:returntype", verify_checkout_input_1.VerifiedCheckoutData)
], OrdersResolver.prototype, "verifyCheckout", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_status_entity_1.OrderStatus),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_status_input_1.CreateOrderStatusInput]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "createOrderStatus", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_status_entity_1.OrderStatus),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_status_input_1.UpdateOrderStatusInput]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "updateOrderStatus", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_status_entity_1.OrderStatus),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersResolver.prototype, "deleteOrderStatus", null);
OrdersResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_entity_1.Order),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersResolver);
exports.OrdersResolver = OrdersResolver;
//# sourceMappingURL=orders.resolver.js.map