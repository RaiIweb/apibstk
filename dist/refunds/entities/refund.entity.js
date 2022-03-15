"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refund = exports.RefundStatus = void 0;
const eager_import_0 = require("../../common/entities/attachment.entity");
const eager_import_1 = require("./refund.entity");
const eager_import_2 = require("../../shops/entities/shop.entity");
const eager_import_3 = require("../../orders/entities/order.entity");
const eager_import_4 = require("../../users/entities/user.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var RefundStatus;
(function (RefundStatus) {
    RefundStatus["APPROVED"] = "Approved";
    RefundStatus["PENDING"] = "Pending";
    RefundStatus["REJECTED"] = "Rejected";
    RefundStatus["PROCESSING"] = "Processing";
})(RefundStatus = exports.RefundStatus || (exports.RefundStatus = {}));
(0, graphql_1.registerEnumType)(RefundStatus, { name: 'RefundStatus' });
let Refund = class Refund extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { title: { type: () => String }, description: { type: () => String }, images: { nullable: true, type: () => [require("../../common/entities/attachment.entity").Attachment] }, amount: { type: () => String }, status: { nullable: true, type: () => require("./refund.entity").RefundStatus }, shop: { nullable: true, type: () => require("../../shops/entities/shop.entity").Shop }, order: { nullable: true, type: () => require("../../orders/entities/order.entity").Order }, customer: { nullable: true, type: () => require("../../users/entities/user.entity").User } };
    }
};
Refund = __decorate([
    (0, graphql_1.InputType)('RefundInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Refund);
exports.Refund = Refund;
//# sourceMappingURL=refund.entity.js.map