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
exports.AttributesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const attributes_service_1 = require("./attributes.service");
const attribute_entity_1 = require("./entities/attribute.entity");
const create_attribute_input_1 = require("./dto/create-attribute.input");
const update_attribute_input_1 = require("./dto/update-attribute.input");
const get_attribute_args_1 = require("./dto/get-attribute.args");
const get_attributes_args_1 = require("./dto/get-attributes.args");
let AttributesResolver = class AttributesResolver {
    constructor(attributesService) {
        this.attributesService = attributesService;
    }
    createAttribute(createAttributeInput) {
        return this.attributesService.create(createAttributeInput);
    }
    findAll(getAttributesArgs) {
        return this.attributesService.findAll();
    }
    findOne(getAttribute) {
        return this.attributesService.findOne(getAttribute);
    }
    updateAttribute(updateAttributeInput) {
        return this.attributesService.update(updateAttributeInput.id, updateAttributeInput);
    }
    deleteAttribute(id) {
        return this.attributesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => attribute_entity_1.Attribute),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_attribute_input_1.CreateAttributeInput]),
    __metadata("design:returntype", void 0)
], AttributesResolver.prototype, "createAttribute", null);
__decorate([
    (0, graphql_1.Query)(() => [attribute_entity_1.Attribute], { name: 'attributes' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_attributes_args_1.GetAttributesArgs]),
    __metadata("design:returntype", void 0)
], AttributesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => attribute_entity_1.Attribute, { name: 'attribute' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_attribute_args_1.GetAttributeArgs]),
    __metadata("design:returntype", void 0)
], AttributesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => attribute_entity_1.Attribute),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_attribute_input_1.UpdateAttributeInput]),
    __metadata("design:returntype", void 0)
], AttributesResolver.prototype, "updateAttribute", null);
__decorate([
    (0, graphql_1.Mutation)(() => attribute_entity_1.Attribute),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AttributesResolver.prototype, "deleteAttribute", null);
AttributesResolver = __decorate([
    (0, graphql_1.Resolver)(() => attribute_entity_1.Attribute),
    __metadata("design:paramtypes", [attributes_service_1.AttributesService])
], AttributesResolver);
exports.AttributesResolver = AttributesResolver;
//# sourceMappingURL=attributes.resolver.js.map