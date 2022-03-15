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
exports.VariationOption = exports.VariationInput = exports.Variation = exports.OrderProductPivot = exports.Product = void 0;
const eager_import_0 = require("../../types/entities/type.entity");
const eager_import_1 = require("../../categories/entities/category.entity");
const eager_import_2 = require("../../tags/entities/tag.entity");
const eager_import_3 = require("../../attributes/entities/attribute-value.entity");
const eager_import_4 = require("./product.entity");
const eager_import_5 = require("../../orders/entities/order.entity");
const eager_import_6 = require("../../shops/entities/shop.entity");
const eager_import_7 = require("../../common/entities/attachment.entity");
const graphql_1 = require("@nestjs/graphql");
const attribute_value_entity_1 = require("../../attributes/entities/attribute-value.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const order_entity_1 = require("../../orders/entities/order.entity");
const shop_entity_1 = require("../../shops/entities/shop.entity");
const tag_entity_1 = require("../../tags/entities/tag.entity");
const type_entity_1 = require("../../types/entities/type.entity");
const class_transformer_1 = require("class-transformer");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["PUBLISH"] = "publish";
    ProductStatus["DRAFT"] = "draft";
})(ProductStatus || (ProductStatus = {}));
var ProductType;
(function (ProductType) {
    ProductType["SIMPLE"] = "simple";
    ProductType["VARIABLE"] = "variable";
})(ProductType || (ProductType = {}));
(0, graphql_1.registerEnumType)(ProductStatus, { name: 'ProductStatus' });
(0, graphql_1.registerEnumType)(ProductType, { name: 'ProductType' });
let Product = class Product extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, slug: { type: () => String }, type: { type: () => require("../../types/entities/type.entity").Type }, type_id: { type: () => Number }, product_type: { type: () => ProductType }, categories: { type: () => [require("../../categories/entities/category.entity").Category] }, tags: { nullable: true, type: () => [require("../../tags/entities/tag.entity").Tag] }, variations: { nullable: true, type: () => [require("../../attributes/entities/attribute-value.entity").AttributeValue] }, variation_options: { nullable: true, type: () => [require("./product.entity").Variation] }, pivot: { nullable: true, type: () => require("./product.entity").OrderProductPivot }, orders: { nullable: true, type: () => [require("../../orders/entities/order.entity").Order] }, shop: { type: () => require("../../shops/entities/shop.entity").Shop }, shop_id: { type: () => Number }, related_products: { nullable: true, type: () => [require("./product.entity").Product] }, description: { type: () => String }, in_stock: { type: () => Boolean }, is_taxable: { type: () => Boolean }, sale_price: { nullable: true, type: () => Number }, max_price: { nullable: true, type: () => Number }, min_price: { nullable: true, type: () => Number }, sku: { nullable: true, type: () => String }, gallery: { nullable: true, type: () => [require("../../common/entities/attachment.entity").Attachment] }, image: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, status: { type: () => ProductStatus }, height: { nullable: true, type: () => String }, length: { nullable: true, type: () => String }, width: { nullable: true, type: () => String }, price: { nullable: true, type: () => Number }, quantity: { type: () => Number }, unit: { type: () => String } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "type_id", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => shop_entity_1.Shop),
    __metadata("design:type", shop_entity_1.Shop)
], Product.prototype, "shop", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "shop_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
Product = __decorate([
    (0, graphql_1.InputType)('ProductInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Product);
exports.Product = Product;
let OrderProductPivot = class OrderProductPivot {
    static _GRAPHQL_METADATA_FACTORY() {
        return { variation_option_id: { nullable: true, type: () => Number }, order_quantity: { type: () => Number }, unit_price: { type: () => Number }, subtotal: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], OrderProductPivot.prototype, "variation_option_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderProductPivot.prototype, "order_quantity", void 0);
OrderProductPivot = __decorate([
    (0, graphql_1.InputType)('PivotInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], OrderProductPivot);
exports.OrderProductPivot = OrderProductPivot;
let Variation = class Variation {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, title: { type: () => String }, price: { type: () => Number }, sku: { type: () => String }, is_disable: { type: () => Boolean }, sale_price: { nullable: true, type: () => Number }, quantity: { type: () => Number }, options: { type: () => [require("./product.entity").VariationOption] } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], Variation.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Variation.prototype, "quantity", void 0);
Variation = __decorate([
    (0, graphql_1.InputType)('VariationInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Variation);
exports.Variation = Variation;
let VariationInput = class VariationInput extends Variation {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
VariationInput = __decorate([
    (0, graphql_1.InputType)()
], VariationInput);
exports.VariationInput = VariationInput;
let VariationOption = class VariationOption {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, value: { type: () => String } };
    }
};
VariationOption = __decorate([
    (0, graphql_1.InputType)('VariationOptionInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], VariationOption);
exports.VariationOption = VariationOption;
//# sourceMappingURL=product.entity.js.map