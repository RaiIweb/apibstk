"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderStatusesOrderByColumn = exports.QueryOrderStatusesOrderByOrderByClause = exports.GetOrderStatusesArgs = exports.OrderStatusPaginator = void 0;
const eager_import_0 = require("../entities/order-status.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-order-statuses.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let OrderStatusPaginator = class OrderStatusPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/order-status.entity").OrderStatus] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
OrderStatusPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], OrderStatusPaginator);
exports.OrderStatusPaginator = OrderStatusPaginator;
let GetOrderStatusesArgs = class GetOrderStatusesArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-order-statuses.args").QueryOrderStatusesOrderByOrderByClause] }, text: { nullable: true, type: () => String } };
    }
};
GetOrderStatusesArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetOrderStatusesArgs);
exports.GetOrderStatusesArgs = GetOrderStatusesArgs;
let QueryOrderStatusesOrderByOrderByClause = class QueryOrderStatusesOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { nullable: true, type: () => require("./get-order-statuses.args").QueryOrderStatusesOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryOrderStatusesOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryOrderStatusesOrderByOrderByClause);
exports.QueryOrderStatusesOrderByOrderByClause = QueryOrderStatusesOrderByOrderByClause;
var QueryOrderStatusesOrderByColumn;
(function (QueryOrderStatusesOrderByColumn) {
    QueryOrderStatusesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryOrderStatusesOrderByColumn["NAME"] = "NAME";
    QueryOrderStatusesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryOrderStatusesOrderByColumn = exports.QueryOrderStatusesOrderByColumn || (exports.QueryOrderStatusesOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryOrderStatusesOrderByColumn, {
    name: 'QueryOrderStatusesOrderByColumn',
});
//# sourceMappingURL=get-order-statuses.args.js.map