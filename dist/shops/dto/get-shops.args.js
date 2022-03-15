"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopsArgs = exports.ShopPaginator = void 0;
const eager_import_0 = require("../entities/shop.entity");
const eager_import_1 = require("../../common/dto/paginator-info.model");
const graphql_1 = require("@nestjs/graphql");
const pagination_args_1 = require("../../common/dto/pagination.args");
const paginator_info_model_1 = require("../../common/dto/paginator-info.model");
let ShopPaginator = class ShopPaginator {
    static _GRAPHQL_METADATA_FACTORY() {
        return { data: { type: () => [require("../entities/shop.entity").Shop] }, paginatorInfo: { type: () => require("../../common/dto/paginator-info.model").PaginatorInfo } };
    }
};
ShopPaginator = __decorate([
    (0, graphql_1.ObjectType)()
], ShopPaginator);
exports.ShopPaginator = ShopPaginator;
let GetShopsArgs = class GetShopsArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => String }, text: { nullable: true, type: () => String }, sortedBy: { nullable: true, type: () => String }, is_active: { nullable: true, type: () => Boolean } };
    }
};
GetShopsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetShopsArgs);
exports.GetShopsArgs = GetShopsArgs;
//# sourceMappingURL=get-shops.args.js.map