"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTaxClassesOrderByColumn = exports.QueryTaxClassesOrderByOrderByClause = exports.GetTaxesArgs = void 0;
const eager_import_0 = require("./get-taxes.args");
const eager_import_1 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
let GetTaxesArgs = class GetTaxesArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { text: { nullable: true, type: () => String }, orderBy: { nullable: true, type: () => [require("./get-taxes.args").QueryTaxClassesOrderByOrderByClause] } };
    }
};
GetTaxesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetTaxesArgs);
exports.GetTaxesArgs = GetTaxesArgs;
let QueryTaxClassesOrderByOrderByClause = class QueryTaxClassesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-taxes.args").QueryTaxClassesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryTaxClassesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryTaxClassesOrderByOrderByClause);
exports.QueryTaxClassesOrderByOrderByClause = QueryTaxClassesOrderByOrderByClause;
var QueryTaxClassesOrderByColumn;
(function (QueryTaxClassesOrderByColumn) {
    QueryTaxClassesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTaxClassesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryTaxClassesOrderByColumn["NAME"] = "NAME";
    QueryTaxClassesOrderByColumn["RATE"] = "RATE";
})(QueryTaxClassesOrderByColumn = exports.QueryTaxClassesOrderByColumn || (exports.QueryTaxClassesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryTaxClassesOrderByColumn, {
    name: 'QueryTaxClassesOrderByColumn',
});
//# sourceMappingURL=get-taxes.args.js.map