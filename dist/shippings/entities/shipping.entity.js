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
exports.ShippingType = exports.Shipping = void 0;
const eager_import_0 = require("./shipping.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Shipping = class Shipping extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_global = true;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, amount: { type: () => Number }, is_global: { type: () => Object }, type: { type: () => require("./shipping.entity").ShippingType } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: true }),
    __metadata("design:type", Object)
], Shipping.prototype, "is_global", void 0);
Shipping = __decorate([
    (0, graphql_1.InputType)('ShippingInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Shipping);
exports.Shipping = Shipping;
var ShippingType;
(function (ShippingType) {
    ShippingType["FIXED"] = "fixed";
    ShippingType["PERCENTAGE"] = "percentage";
    ShippingType["FREE"] = "free";
})(ShippingType = exports.ShippingType || (exports.ShippingType = {}));
(0, graphql_1.registerEnumType)(ShippingType, {
    name: 'ShippingType',
});
//# sourceMappingURL=shipping.entity.js.map