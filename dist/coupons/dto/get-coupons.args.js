"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCouponsOrderByColumn = exports.QueryCouponsOrderByOrderByClause = exports.GetCouponsArgs = exports.CouponPaginator = void 0;
const eager_import_0 = require("../entities/coupon.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-coupons.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let CouponPaginator = class CouponPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/coupon.entity").Coupon] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
CouponPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], CouponPaginator);
exports.CouponPaginator = CouponPaginator;
let GetCouponsArgs = class GetCouponsArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-coupons.args").QueryCouponsOrderByOrderByClause] }, text: { nullable: true, type: () => String } };
    }
};
GetCouponsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetCouponsArgs);
exports.GetCouponsArgs = GetCouponsArgs;
let QueryCouponsOrderByOrderByClause = class QueryCouponsOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-coupons.args").QueryCouponsOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryCouponsOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryCouponsOrderByOrderByClause);
exports.QueryCouponsOrderByOrderByClause = QueryCouponsOrderByOrderByClause;
var QueryCouponsOrderByColumn;
(function (QueryCouponsOrderByColumn) {
    QueryCouponsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryCouponsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryCouponsOrderByColumn["CODE"] = "CODE";
    QueryCouponsOrderByColumn["AMOUNT"] = "AMOUNT";
})(QueryCouponsOrderByColumn = exports.QueryCouponsOrderByColumn || (exports.QueryCouponsOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryCouponsOrderByColumn, {
    name: 'QueryCouponsOrderByColumn',
});
//# sourceMappingURL=get-coupons.args.js.map