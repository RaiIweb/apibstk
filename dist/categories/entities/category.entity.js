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
exports.Category = void 0;
const eager_import_0 = require("./category.entity");
const eager_import_1 = require("../../common/entities/attachment.entity");
const eager_import_2 = require("../../types/entities/type.entity");
const eager_import_3 = require("../../products/entities/product.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const type_entity_1 = require("../../types/entities/type.entity");
let Category = class Category extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, slug: { type: () => String }, parent: { nullable: true, type: () => require("./category.entity").Category }, parent_id: { nullable: true, type: () => Number }, products_count: { nullable: true, type: () => Number }, children: { nullable: true, type: () => [require("./category.entity").Category] }, details: { nullable: true, type: () => String }, image: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, icon: { nullable: true, type: () => String }, type: { nullable: true, type: () => require("../../types/entities/type.entity").Type }, products: { nullable: true, type: () => [require("../../products/entities/product.entity").Product] } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], Category.prototype, "parent_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Category.prototype, "products_count", void 0);
Category = __decorate([
    (0, graphql_1.InputType)('CategoryInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map