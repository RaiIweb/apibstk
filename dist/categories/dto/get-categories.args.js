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
exports.QueryCategoriesHasTypeColumn = exports.QueryCategoriesOrderByColumn = exports.QueryCategoriesHasTypeWhereHasConditionsRelation = exports.QueryCategoriesHasTypeWhereHasConditions = exports.QueryCategoriesOrderByOrderByClause = exports.GetCategoriesArgs = exports.CategoryPaginator = void 0;
const eager_import_0 = require("../entities/category.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-categories.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let CategoryPaginator = class CategoryPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/category.entity").Category] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
CategoryPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryPaginator);
exports.CategoryPaginator = CategoryPaginator;
let GetCategoriesArgs = class GetCategoriesArgs extends pagination_args_1.PaginationArgs {
    constructor() {
        super(...arguments);
        this.parent = null;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-categories.args").QueryCategoriesOrderByOrderByClause] }, text: { nullable: true, type: () => String }, hasType: { nullable: true, type: () => require("./get-categories.args").QueryCategoriesHasTypeWhereHasConditions }, name: { nullable: true, type: () => String }, parent: { nullable: true, type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID, { nullable: true }),
    __metadata("design:type", Number)
], GetCategoriesArgs.prototype, "parent", void 0);
GetCategoriesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetCategoriesArgs);
exports.GetCategoriesArgs = GetCategoriesArgs;
let QueryCategoriesOrderByOrderByClause = class QueryCategoriesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-categories.args").QueryCategoriesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryCategoriesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryCategoriesOrderByOrderByClause);
exports.QueryCategoriesOrderByOrderByClause = QueryCategoriesOrderByOrderByClause;
let QueryCategoriesHasTypeWhereHasConditions = class QueryCategoriesHasTypeWhereHasConditions extends generic_conditions_input_1.WhereHasConditions {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-categories.args").QueryCategoriesHasTypeColumn }, AND: { nullable: true, type: () => [require("./get-categories.args").QueryCategoriesHasTypeWhereHasConditions] }, OR: { nullable: true, type: () => [require("./get-categories.args").QueryCategoriesHasTypeWhereHasConditions] }, HAS: { nullable: true, type: () => require("./get-categories.args").QueryCategoriesHasTypeWhereHasConditionsRelation } };
    }
};
QueryCategoriesHasTypeWhereHasConditions = __decorate([
    (0, graphql_1.InputType)()
], QueryCategoriesHasTypeWhereHasConditions);
exports.QueryCategoriesHasTypeWhereHasConditions = QueryCategoriesHasTypeWhereHasConditions;
let QueryCategoriesHasTypeWhereHasConditionsRelation = class QueryCategoriesHasTypeWhereHasConditionsRelation extends generic_conditions_input_1.WhereHasConditionsRelation {
    static _GRAPHQL_METADATA_FACTORY() {
        return { condition: { type: () => require("./get-categories.args").QueryCategoriesHasTypeWhereHasConditions } };
    }
};
QueryCategoriesHasTypeWhereHasConditionsRelation = __decorate([
    (0, graphql_1.InputType)()
], QueryCategoriesHasTypeWhereHasConditionsRelation);
exports.QueryCategoriesHasTypeWhereHasConditionsRelation = QueryCategoriesHasTypeWhereHasConditionsRelation;
var QueryCategoriesOrderByColumn;
(function (QueryCategoriesOrderByColumn) {
    QueryCategoriesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCategoriesOrderByColumn["NAME"] = "NAME";
    QueryCategoriesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryCategoriesOrderByColumn = exports.QueryCategoriesOrderByColumn || (exports.QueryCategoriesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryCategoriesOrderByColumn, {
    name: 'QueryCategoriesOrderByColumn',
});
var QueryCategoriesHasTypeColumn;
(function (QueryCategoriesHasTypeColumn) {
    QueryCategoriesHasTypeColumn["SLUG"] = "SLUG";
})(QueryCategoriesHasTypeColumn = exports.QueryCategoriesHasTypeColumn || (exports.QueryCategoriesHasTypeColumn = {}));
(0, graphql_1.registerEnumType)(QueryCategoriesHasTypeColumn, {
    name: 'QueryCategoriesHasTypeColumn',
});
//# sourceMappingURL=get-categories.args.js.map