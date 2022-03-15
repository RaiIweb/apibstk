"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUsersOrderByColumn = exports.QueryUsersOrderByOrderByClause = exports.GetUsersArgs = exports.UserPaginator = void 0;
const eager_import_0 = require("../entities/user.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const eager_import_2 = require("./get-users.args");
const eager_import_3 = require("../../common/dto/generic-conditions.input");
const graphql_1 = require("@nestjs/graphql");
const generic_conditions_input_1 = require("../../common/dto/generic-conditions.input");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let UserPaginator = class UserPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/user.entity").User] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
UserPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], UserPaginator);
exports.UserPaginator = UserPaginator;
let GetUsersArgs = class GetUsersArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => [require("./get-users.args").QueryUsersOrderByOrderByClause] }, text: { nullable: true, type: () => String } };
    }
};
GetUsersArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetUsersArgs);
exports.GetUsersArgs = GetUsersArgs;
let QueryUsersOrderByOrderByClause = class QueryUsersOrderByOrderByClause {
    static _GRAPHQL_METADATA_FACTORY() {
        return { column: { type: () => require("./get-users.args").QueryUsersOrderByColumn }, order: { type: () => require("../../common/dto/generic-conditions.input").SortOrder } };
    }
};
QueryUsersOrderByOrderByClause = __decorate([
    (0, graphql_1.InputType)()
], QueryUsersOrderByOrderByClause);
exports.QueryUsersOrderByOrderByClause = QueryUsersOrderByOrderByClause;
var QueryUsersOrderByColumn;
(function (QueryUsersOrderByColumn) {
    QueryUsersOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryUsersOrderByColumn["NAME"] = "NAME";
    QueryUsersOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryUsersOrderByColumn = exports.QueryUsersOrderByColumn || (exports.QueryUsersOrderByColumn = {}));
(0, graphql_1.registerEnumType)(QueryUsersOrderByColumn, {
    name: 'QueryUsersOrderByColumn',
});
//# sourceMappingURL=get-users.args.js.map