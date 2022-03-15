"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTagsHasTypeColumn = exports.QueryTagsOrderByColumn = exports.QueryTagsHasTypeWhereHasConditionsRelation = exports.QueryTagsHasTypeWhereHasConditions = exports.QueryTagsOrderByOrderByClause = exports.GetTagsArgs = exports.TagPaginator = void 0;
const eager_import_0 = require("../entities/tag.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-tags.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let TagPaginator = class TagPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/tag.entity").Tag] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
TagPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], TagPaginator);
exports.TagPaginator = TagPaginator;
let GetTagsArgs = class GetTagsArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-tags.args").QueryTagsOrderByOrderByClause] }, text: { nullable: true, type: () => String }, name: { nullable: true, type: () => String }, hasType: { nullable: true, type: () => require("./get-tags.args").QueryTagsHasTypeWhereHasConditions } };
    }
};
GetTagsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetTagsArgs);
exports.GetTagsArgs = GetTagsArgs;
let QueryTagsOrderByOrderByClause = class QueryTagsOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-tags.args").QueryTagsOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryTagsOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryTagsOrderByOrderByClause);
exports.QueryTagsOrderByOrderByClause = QueryTagsOrderByOrderByClause;
let QueryTagsHasTypeWhereHasConditions = class QueryTagsHasTypeWhereHasConditions extends generic_conditions_input_1.WhereHasConditions {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-tags.args").QueryTagsHasTypeColumn }, AND: { nullable: true, type: () => [require("./get-tags.args").QueryTagsHasTypeWhereHasConditions] }, OR: { nullable: true, type: () => [require("./get-tags.args").QueryTagsHasTypeWhereHasConditions] }, HAS: { nullable: true, type: () => require("./get-tags.args").QueryTagsHasTypeWhereHasConditionsRelation } };
    }
};
QueryTagsHasTypeWhereHasConditions = __decorate([
    (0, graphql_1.InputType)()
], QueryTagsHasTypeWhereHasConditions);
exports.QueryTagsHasTypeWhereHasConditions = QueryTagsHasTypeWhereHasConditions;
let QueryTagsHasTypeWhereHasConditionsRelation = class QueryTagsHasTypeWhereHasConditionsRelation extends generic_conditions_input_1.WhereHasConditionsRelation {
    static _GRAPHQL_METADATA_FACTORY() {
        return { condition: { type: () => require("./get-tags.args").QueryTagsHasTypeWhereHasConditions } };
    }
};
QueryTagsHasTypeWhereHasConditionsRelation = __decorate([
    (0, graphql_1.InputType)()
], QueryTagsHasTypeWhereHasConditionsRelation);
exports.QueryTagsHasTypeWhereHasConditionsRelation = QueryTagsHasTypeWhereHasConditionsRelation;
var QueryTagsOrderByColumn;
(function (QueryTagsOrderByColumn) {
    QueryTagsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTagsOrderByColumn["NAME"] = "NAME";
    QueryTagsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryTagsOrderByColumn = exports.QueryTagsOrderByColumn || (exports.QueryTagsOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryTagsOrderByColumn, {
    name: 'QueryTagsOrderByColumn',
});
var QueryTagsHasTypeColumn;
(function (QueryTagsHasTypeColumn) {
    QueryTagsHasTypeColumn["SLUG"] = "SLUG";
})(QueryTagsHasTypeColumn = exports.QueryTagsHasTypeColumn || (exports.QueryTagsHasTypeColumn = {}));
(0, graphql_1.registerEnumType)(QueryTagsHasTypeColumn, {
    name: 'QueryTagsHasTypeColumn',
});
//# sourceMappingURL=get-tags.args.js.map