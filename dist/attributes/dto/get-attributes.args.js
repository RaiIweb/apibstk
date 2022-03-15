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
exports.QueryAttributesOrderByColumn = exports.QueryAttributesOrderByOrderByClause = exports.GetAttributesArgs = void 0;
const eager_import_0 = require("./get-attributes.args");
const eager_import_1 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
let GetAttributesArgs = class GetAttributesArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-attributes.args").QueryAttributesOrderByOrderByClause] }, shop_id: { nullable: true, type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], GetAttributesArgs.prototype, "shop_id", void 0);
GetAttributesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetAttributesArgs);
exports.GetAttributesArgs = GetAttributesArgs;
let QueryAttributesOrderByOrderByClause = class QueryAttributesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-attributes.args").QueryAttributesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryAttributesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryAttributesOrderByOrderByClause);
exports.QueryAttributesOrderByOrderByClause = QueryAttributesOrderByOrderByClause;
var QueryAttributesOrderByColumn;
(function (QueryAttributesOrderByColumn) {
    QueryAttributesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryAttributesOrderByColumn["NAME"] = "NAME";
    QueryAttributesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryAttributesOrderByColumn = exports.QueryAttributesOrderByColumn || (exports.QueryAttributesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryAttributesOrderByColumn, {
    name: 'QueryAttributesOrderByColumn',
});
//# sourceMappingURL=get-attributes.args.js.map