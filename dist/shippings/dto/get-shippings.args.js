"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryShippingClassesOrderByColumn = exports.QueryShippingClassesOrderByOrderByClause = exports.GetShippingsArgs = void 0;
const eager_import_0 = require("./get-shippings.args");
const eager_import_1 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
let GetShippingsArgs = class GetShippingsArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { text: { nullable: true, type: () => String }, orderBy: { nullable: true, type: () => [require("./get-shippings.args").QueryShippingClassesOrderByOrderByClause] } };
    }
};
GetShippingsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetShippingsArgs);
exports.GetShippingsArgs = GetShippingsArgs;
let QueryShippingClassesOrderByOrderByClause = class QueryShippingClassesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-shippings.args").QueryShippingClassesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryShippingClassesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryShippingClassesOrderByOrderByClause);
exports.QueryShippingClassesOrderByOrderByClause = QueryShippingClassesOrderByOrderByClause;
var QueryShippingClassesOrderByColumn;
(function (QueryShippingClassesOrderByColumn) {
    QueryShippingClassesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryShippingClassesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryShippingClassesOrderByColumn["NAME"] = "NAME";
    QueryShippingClassesOrderByColumn["AMOUNT"] = "AMOUNT";
})(QueryShippingClassesOrderByColumn = exports.QueryShippingClassesOrderByColumn || (exports.QueryShippingClassesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryShippingClassesOrderByColumn, {
    name: 'QueryShippingClassesOrderByColumn',
});
//# sourceMappingURL=get-shippings.args.js.map