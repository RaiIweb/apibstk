"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const eager_import_0 = require("./profile.entity");
const eager_import_1 = require("../../shops/entities/shop.entity");
const eager_import_2 = require("../../refunds/entities/refund.entity");
const eager_import_3 = require("../../addresses/entities/address.entity");
const eager_import_4 = require("../../orders/entities/order.entity");
const eager_import_5 = require("../../wallets/entities/wallet.entity");
const graphql_1 = require("@nestjs/graphql");
const address_entity_1 = require("../../addresses/entities/address.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const refund_entity_1 = require("../../refunds/entities/refund.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
const wallet_entity_1 = require("../../wallets/entities/wallet.entity");
let User = class User extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, email: { type: () => String }, password: { nullable: true, type: () => String }, shop_id: { nullable: true, type: () => Number }, profile: { nullable: true, type: () => require("./profile.entity").Profile }, shops: { nullable: true, type: () => [require("../../shops/entities/shop.entity").Shop] }, refunds: { nullable: true, type: () => [require("../../refunds/entities/refund.entity").Refund] }, managed_shop: { nullable: true, type: () => require("../../shops/entities/shop.entity").Shop }, is_active: { nullable: true, type: () => Boolean }, address: { nullable: true, type: () => [require("../../addresses/entities/address.entity").Address] }, orders: { nullable: true, type: () => [require("../../orders/entities/order.entity").Order] }, wallet: { nullable: true, type: () => require("../../wallets/entities/wallet.entity").Wallet } };
    }
};
User = __decorate([
    (0, graphql_1.InputType)('UserInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map