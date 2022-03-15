"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTypesOrderByColumn = exports.QueryTypesOrderByOrderByClause = exports.GetTypesArgs = void 0;
const eager_import_0 = require("./get-types.args");
const eager_import_1 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
let GetTypesArgs = class GetTypesArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-types.args").QueryTypesOrderByOrderByClause] }, text: { nullable: true, type: () => String } };
    }
};
GetTypesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetTypesArgs);
exports.GetTypesArgs = GetTypesArgs;
let QueryTypesOrderByOrderByClause = class QueryTypesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-types.args").QueryTypesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryTypesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryTypesOrderByOrderByClause);
exports.QueryTypesOrderByOrderByClause = QueryTypesOrderByOrderByClause;
var QueryTypesOrderByColumn;
(function (QueryTypesOrderByColumn) {
    QueryTypesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryTypesOrderByColumn["NAME"] = "NAME";
    QueryTypesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryTypesOrderByColumn = exports.QueryTypesOrderByColumn || (exports.QueryTypesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryTypesOrderByColumn, {
    name: 'QueryTypesOrderByColumn',
});
//# sourceMappingURL=get-types.args.js.map