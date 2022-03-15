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
exports.ApproveShopInput = exports.CreateShopInput = void 0;
const eager_import_0 = require("../entities/shop.entity");
const graphql_1 = require("@nestjs/graphql");
const shop_entity_1 = require("../entities/shop.entity");
let CreateShopInput = class CreateShopInput extends (0, graphql_1.PickType)(shop_entity_1.Shop, [
    'name',
    'address',
    'description',
    'cover_image',
    'logo',
    'settings',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { categories: { nullable: true, type: () => [Number] }, balance: { nullable: true, type: () => require("../entities/shop.entity").BalanceInput } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], { nullable: true }),
    __metadata("design:type", Array)
], CreateShopInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => shop_entity_1.BalanceInput, { nullable: true }),
    __metadata("design:type", shop_entity_1.BalanceInput)
], CreateShopInput.prototype, "balance", void 0);
CreateShopInput = __decorate([
    (0, graphql_1.InputType)()
], CreateShopInput);
exports.CreateShopInput = CreateShopInput;
let ApproveShopInput = class ApproveShopInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, admin_commission_rate: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ApproveShopInput.prototype, "id", void 0);
ApproveShopInput = __decorate([
    (0, graphql_1.InputType)()
], ApproveShopInput);
exports.ApproveShopInput = ApproveShopInput;
//# sourceMappingURL=create-shop.input.js.map