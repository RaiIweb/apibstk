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
exports.AttributeValue = void 0;
const eager_import_0 = require("./attribute.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let AttributeValue = class AttributeValue extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { shop_id: { type: () => Number }, value: { type: () => String }, meta: { nullable: true, type: () => String }, attribute: { type: () => require("./attribute.entity").Attribute } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], AttributeValue.prototype, "shop_id", void 0);
AttributeValue = __decorate([
    (0, graphql_1.InputType)('AttributeValueInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], AttributeValue);
exports.AttributeValue = AttributeValue;
//# sourceMappingURL=attribute-value.entity.js.map