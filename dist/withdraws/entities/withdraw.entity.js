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
exports.WithdrawStatus = exports.Withdraw = void 0;
const eager_import_0 = require("./withdraw.entity");
const eager_import_1 = require("../../shops/entities/shop.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
let Withdraw = class Withdraw extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { amount: { type: () => Number }, status: { nullable: true, type: () => require("./withdraw.entity").WithdrawStatus }, shop_id: { type: () => Number }, shop: { nullable: true, type: () => require("../../shops/entities/shop.entity").Shop }, payment_method: { type: () => String }, details: { type: () => String }, note: { type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Withdraw.prototype, "shop_id", void 0);
Withdraw = __decorate([
    (0, graphql_1.InputType)('WithdrawInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Withdraw);
exports.Withdraw = Withdraw;
var WithdrawStatus;
(function (WithdrawStatus) {
    WithdrawStatus["APPROVED"] = "Approved";
    WithdrawStatus["PENDING"] = "Pending";
    WithdrawStatus["ON_HOLD"] = "On hold";
    WithdrawStatus["REJECTED"] = "Rejected";
    WithdrawStatus["PROCESSING"] = "Processing";
})(WithdrawStatus = exports.WithdrawStatus || (exports.WithdrawStatus = {}));
(0, graphql_1.registerEnumType)(WithdrawStatus, {
    name: 'WithdrawStatus',
});
//# sourceMappingURL=withdraw.entity.js.map