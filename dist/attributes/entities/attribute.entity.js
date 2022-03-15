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
exports.Attribute = void 0;
const eager_import_0 = require("../../shops/entities/shop.entity");
const eager_import_1 = require("./attribute-value.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
let Attribute = class Attribute extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, shop_id: { type: () => Number }, shop: { type: () => require("../../shops/entities/shop.entity").Shop }, slug: { type: () => String }, values: { type: () => [require("./attribute-value.entity").AttributeValue] } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Attribute.prototype, "shop_id", void 0);
Attribute = __decorate([
    (0, graphql_1.InputType)('AttributeInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Attribute);
exports.Attribute = Attribute;
//# sourceMappingURL=attribute.entity.js.map