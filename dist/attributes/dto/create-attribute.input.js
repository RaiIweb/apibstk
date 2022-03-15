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
exports.AttributeValueInput = exports.CreateAttributeInput = void 0;
const eager_import_0 = require("./create-attribute.input");
const graphql_1 = require("@nestjs/graphql");
const attribute_entity_1 = require("../entities/attribute.entity");
let CreateAttributeInput = class CreateAttributeInput extends (0, graphql_1.PickType)(attribute_entity_1.Attribute, [
    'name',
    'shop_id',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { values: { type: () => [require("./create-attribute.input").AttributeValueInput] } };
    }
};
CreateAttributeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAttributeInput);
exports.CreateAttributeInput = CreateAttributeInput;
let AttributeValueInput = class AttributeValueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, value: { type: () => String }, meta: { nullable: true, type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], AttributeValueInput.prototype, "id", void 0);
AttributeValueInput = __decorate([
    (0, graphql_1.InputType)()
], AttributeValueInput);
exports.AttributeValueInput = AttributeValueInput;
//# sourceMappingURL=create-attribute.input.js.map