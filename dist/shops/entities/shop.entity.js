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
exports.ShopSettings = exports.PaymentInfo = exports.BalanceInput = exports.Balance = exports.Shop = void 0;
const eager_import_0 = require("../../users/entities/user.entity");
const eager_import_1 = require("./shop.entity");
const eager_import_2 = require("../../common/entities/attachment.entity");
const eager_import_3 = require("../../addresses/entities/address.entity");
const eager_import_4 = require("../../settings/entities/setting.entity");
const graphql_1 = require("@nestjs/graphql");
const address_entity_1 = require("../../addresses/entities/address.entity");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const setting_entity_1 = require("../../settings/entities/setting.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Shop = class Shop extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { owner_id: { type: () => Number }, owner: { type: () => require("../../users/entities/user.entity").User }, staffs: { nullable: true, type: () => [require("../../users/entities/user.entity").User] }, is_active: { type: () => Boolean }, orders_count: { type: () => Number }, products_count: { type: () => Number }, balance: { nullable: true, type: () => require("./shop.entity").Balance }, name: { type: () => String }, slug: { type: () => String }, description: { nullable: true, type: () => String }, cover_image: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, logo: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, address: { type: () => require("../../addresses/entities/address.entity").UserAddress }, settings: { nullable: true, type: () => require("./shop.entity").ShopSettings } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Shop.prototype, "owner_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Shop.prototype, "orders_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Shop.prototype, "products_count", void 0);
Shop = __decorate([
    (0, graphql_1.InputType)('ShopInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Shop);
exports.Shop = Shop;
let Balance = class Balance {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { nullable: true, type: () => Number }, admin_commission_rate: { type: () => Number }, shop: { type: () => require("./shop.entity").Shop }, total_earnings: { type: () => Number }, withdrawn_amount: { type: () => Number }, current_balance: { type: () => Number }, payment_info: { type: () => require("./shop.entity").PaymentInfo } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], Balance.prototype, "id", void 0);
Balance = __decorate([
    (0, graphql_1.InputType)('BalanceInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Balance);
exports.Balance = Balance;
let BalanceInput = class BalanceInput extends (0, graphql_1.PickType)(Balance, ['id', 'payment_info']) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
BalanceInput = __decorate([
    (0, graphql_1.InputType)()
], BalanceInput);
exports.BalanceInput = BalanceInput;
let PaymentInfo = class PaymentInfo {
    static _GRAPHQL_METADATA_FACTORY() {
        return { account: { nullable: true, type: () => String }, name: { nullable: true, type: () => String }, email: { nullable: true, type: () => String }, bank: { nullable: true, type: () => String } };
    }
};
PaymentInfo = __decorate([
    (0, graphql_1.InputType)('PaymentInfoInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], PaymentInfo);
exports.PaymentInfo = PaymentInfo;
let ShopSettings = class ShopSettings {
    static _GRAPHQL_METADATA_FACTORY() {
        return { socials: { nullable: true, type: () => [require("../../settings/entities/setting.entity").ShopSocials] }, contact: { nullable: true, type: () => String }, location: { nullable: true, type: () => require("../../settings/entities/setting.entity").Location }, website: { nullable: true, type: () => String } };
    }
};
ShopSettings = __decorate([
    (0, graphql_1.InputType)('ShopSettingsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], ShopSettings);
exports.ShopSettings = ShopSettings;
//# sourceMappingURL=shop.entity.js.map