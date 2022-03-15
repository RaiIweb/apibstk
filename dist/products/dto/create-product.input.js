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
exports.CreateProductInput = void 0;
const eager_import_0 = require("../entities/product.entity");
const graphql_1 = require("@nestjs/graphql");
const product_entity_1 = require("../entities/product.entity");
let UpsertVariationsHasMany = class UpsertVariationsHasMany {
    static _GRAPHQL_METADATA_FACTORY() {
        return { upsert: { nullable: true, type: () => [require("../entities/product.entity").VariationInput] }, delete: { nullable: true, type: () => [Number] } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID], { nullable: true }),
    __metadata("design:type", Array)
], UpsertVariationsHasMany.prototype, "delete", void 0);
UpsertVariationsHasMany = __decorate([
    (0, graphql_1.InputType)()
], UpsertVariationsHasMany);
let CreateProductInput = class CreateProductInput extends (0, graphql_1.OmitType)(product_entity_1.Product, [
    'id',
    'slug',
    'created_at',
    'updated_at',
    'orders',
    'pivot',
    'categories',
    'tags',
    'type',
    'shop',
    'related_products',
    'variation_options',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { categories: { nullable: true, type: () => [String] }, tags: { nullable: true, type: () => [Number] }, variation_options: { nullable: true, type: () => UpsertVariationsHasMany } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID]),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_1.ID]),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(() => UpsertVariationsHasMany),
    __metadata("design:type", UpsertVariationsHasMany)
], CreateProductInput.prototype, "variation_options", void 0);
CreateProductInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);
exports.CreateProductInput = CreateProductInput;
//# sourceMappingURL=create-product.input.js.map