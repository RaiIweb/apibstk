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
exports.GetOrdersArgs = exports.OrderPaginator = void 0;
const eager_import_0 = require("../entities/order.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const graphql_1 = require("@nestjs/graphql");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let OrderPaginator = class OrderPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/order.entity").Order] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
OrderPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], OrderPaginator);
exports.OrderPaginator = OrderPaginator;
let GetOrdersArgs = class GetOrdersArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { tracking_number: { nullable: true, type: () => String }, orderBy: { nullable: true, type: () => String }, sortedBy: { nullable: true, type: () => String }, customer_id: { nullable: true, type: () => Number }, shop_id: { nullable: true, type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], GetOrdersArgs.prototype, "customer_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], GetOrdersArgs.prototype, "shop_id", void 0);
GetOrdersArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetOrdersArgs);
exports.GetOrdersArgs = GetOrdersArgs;
//# sourceMappingURL=get-orders.args.js.map