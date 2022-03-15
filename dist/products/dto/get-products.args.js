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
exports.QueryProductsHasCategoriesColumn = exports.QueryProductsHasTypeColumn = exports.QueryProductsOrderByColumn = exports.QueryProductsHasCategoriesWhereHasConditionsRelation = exports.QueryProductsHasTypeWhereHasConditionsRelation = exports.QueryProductsHasCategoriesWhereHasConditions = exports.QueryProductsHasTypeWhereHasConditions = exports.QueryProductsOrderByOrderByClause = exports.GetProductsArgs = exports.ProductPaginator = void 0;
const eager_import_0 = require("../entities/product.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-products.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let ProductPaginator = class ProductPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/product.entity").Product] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
ProductPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], ProductPaginator);
exports.ProductPaginator = ProductPaginator;
let GetProductsArgs = class GetProductsArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-products.args").QueryProductsOrderByOrderByClause] }, text: { nullable: true, type: () => String }, status: { nullable: true, type: () => String }, shop_id: { nullable: true, type: () => Number }, hasType: { nullable: true, type: () => require("./get-products.args").QueryProductsHasTypeWhereHasConditions }, hasCategories: { nullable: true, type: () => require("./get-products.args").QueryProductsHasCategoriesWhereHasConditions } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], GetProductsArgs.prototype, "shop_id", void 0);
GetProductsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetProductsArgs);
exports.GetProductsArgs = GetProductsArgs;
let QueryProductsOrderByOrderByClause = class QueryProductsOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-products.args").QueryProductsOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryProductsOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryProductsOrderByOrderByClause);
exports.QueryProductsOrderByOrderByClause = QueryProductsOrderByOrderByClause;
let QueryProductsHasTypeWhereHasConditions = class QueryProductsHasTypeWhereHasConditions extends generic_conditions_input_1.WhereHasConditions {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-products.args").QueryProductsHasTypeColumn }, AND: { nullable: true, type: () => [require("./get-products.args").QueryProductsHasTypeWhereHasConditions] }, OR: { nullable: true, type: () => [require("./get-products.args").QueryProductsHasTypeWhereHasConditions] }, HAS: { nullable: true, type: () => require("./get-products.args").QueryProductsHasTypeWhereHasConditionsRelation } };
    }
};
QueryProductsHasTypeWhereHasConditions = __decorate([
    (0, graphql_1.InputType)()
], QueryProductsHasTypeWhereHasConditions);
exports.QueryProductsHasTypeWhereHasConditions = QueryProductsHasTypeWhereHasConditions;
let QueryProductsHasCategoriesWhereHasConditions = class QueryProductsHasCategoriesWhereHasConditions extends generic_conditions_input_1.WhereHasConditions {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-products.args").QueryProductsHasCategoriesColumn }, AND: { nullable: true, type: () => [require("./get-products.args").QueryProductsHasCategoriesWhereHasConditions] }, OR: { nullable: true, type: () => [require("./get-products.args").QueryProductsHasCategoriesWhereHasConditions] }, HAS: { nullable: true, type: () => require("./get-products.args").QueryProductsHasCategoriesWhereHasConditionsRelation } };
    }
};
QueryProductsHasCategoriesWhereHasConditions = __decorate([
    (0, graphql_1.InputType)()
], QueryProductsHasCategoriesWhereHasConditions);
exports.QueryProductsHasCategoriesWhereHasConditions = QueryProductsHasCategoriesWhereHasConditions;
let QueryProductsHasTypeWhereHasConditionsRelation = class QueryProductsHasTypeWhereHasConditionsRelation extends generic_conditions_input_1.WhereHasConditionsRelation {
    static _GRAPHQL_METADATA_FACTORY() {
        return { condition: { type: () => require("./get-products.args").QueryProductsHasTypeWhereHasConditions } };
    }
};
QueryProductsHasTypeWhereHasConditionsRelation = __decorate([
    (0, graphql_1.InputType)()
], QueryProductsHasTypeWhereHasConditionsRelation);
exports.QueryProductsHasTypeWhereHasConditionsRelation = QueryProductsHasTypeWhereHasConditionsRelation;
let QueryProductsHasCategoriesWhereHasConditionsRelation = class QueryProductsHasCategoriesWhereHasConditionsRelation extends generic_conditions_input_1.WhereHasConditionsRelation {
    static _GRAPHQL_METADATA_FACTORY() {
        return { condition: { type: () => require("./get-products.args").QueryProductsHasCategoriesWhereHasConditions } };
    }
};
QueryProductsHasCategoriesWhereHasConditionsRelation = __decorate([
    (0, graphql_1.InputType)()
], QueryProductsHasCategoriesWhereHasConditionsRelation);
exports.QueryProductsHasCategoriesWhereHasConditionsRelation = QueryProductsHasCategoriesWhereHasConditionsRelation;
var QueryProductsOrderByColumn;
(function (QueryProductsOrderByColumn) {
    QueryProductsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryProductsOrderByColumn["NAME"] = "NAME";
    QueryProductsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryProductsOrderByColumn = exports.QueryProductsOrderByColumn || (exports.QueryProductsOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryProductsOrderByColumn, {
    name: 'QueryProductsOrderByColumn',
});
var QueryProductsHasTypeColumn;
(function (QueryProductsHasTypeColumn) {
    QueryProductsHasTypeColumn["SLUG"] = "SLUG";
})(QueryProductsHasTypeColumn = exports.QueryProductsHasTypeColumn || (exports.QueryProductsHasTypeColumn = {}));
(0, graphql_1.registerEnumType)(QueryProductsHasTypeColumn, {
    name: 'QueryProductsHasTypeColumn',
});
var QueryProductsHasCategoriesColumn;
(function (QueryProductsHasCategoriesColumn) {
    QueryProductsHasCategoriesColumn["SLUG"] = "SLUG";
})(QueryProductsHasCategoriesColumn = exports.QueryProductsHasCategoriesColumn || (exports.QueryProductsHasCategoriesColumn = {}));
(0, graphql_1.registerEnumType)(QueryProductsHasCategoriesColumn, {
    name: 'QueryProductsHasCategoriesColumn',
});
//# sourceMappingURL=get-products.args.js.map