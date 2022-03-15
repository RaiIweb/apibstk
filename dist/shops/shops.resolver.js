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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const shops_service_1 = require("./shops.service");
const shop_entity_1 = require("./entities/shop.entity");
const create_shop_input_1 = require("./dto/create-shop.input");
const update_shop_input_1 = require("./dto/update-shop.input");
const get_shops_args_1 = require("./dto/get-shops.args");
const get_shop_args_1 = require("./dto/get-shop.args");
const add_staff_input_1 = require("./dto/add-staff.input");
const get_users_args_1 = require("../users/dto/get-users.args");
const get_staffs_args_1 = require("./dto/get-staffs.args");
const user_entity_1 = require("../users/entities/user.entity");
let ShopsResolver = class ShopsResolver {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    createShop(createShopInput) {
        return this.shopsService.create(createShopInput);
    }
    async getShops(getShopsArgs) {
        return this.shopsService.getShops(getShopsArgs);
    }
    async getShop(getShopArgs) {
        return this.shopsService.getShop(getShopArgs);
    }
    updateShop(updateShopInput) {
        return this.shopsService.update(updateShopInput.id, updateShopInput);
    }
    deleteShop(id) {
        return this.shopsService.remove(id);
    }
    disapproveShop(id) {
        return this.shopsService.remove(id);
    }
    approveShop(approveShopInput) {
        console.log(approveShopInput);
    }
    async getStaffs(getStaffsArgs) {
        return this.shopsService.getStaffs(getStaffsArgs);
    }
    addStaff(addStaffInput) {
        console.log(addStaffInput);
        return true;
    }
    removeStaff(id) {
        return this.shopsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => shop_entity_1.Shop),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_input_1.CreateShopInput]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "createShop", null);
__decorate([
    (0, graphql_1.Query)(() => get_shops_args_1.ShopPaginator, { name: 'shops' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shops_args_1.GetShopsArgs]),
    __metadata("design:returntype", Promise)
], ShopsResolver.prototype, "getShops", null);
__decorate([
    (0, graphql_1.Query)(() => shop_entity_1.Shop, { name: 'shop', nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shop_args_1.GetShopArgs]),
    __metadata("design:returntype", Promise)
], ShopsResolver.prototype, "getShop", null);
__decorate([
    (0, graphql_1.Mutation)(() => shop_entity_1.Shop),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_shop_input_1.UpdateShopInput]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "updateShop", null);
__decorate([
    (0, graphql_1.Mutation)(() => shop_entity_1.Shop),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "deleteShop", null);
__decorate([
    (0, graphql_1.Mutation)(() => shop_entity_1.Shop),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "disapproveShop", null);
__decorate([
    (0, graphql_1.Mutation)(() => shop_entity_1.Shop),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_input_1.ApproveShopInput]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "approveShop", null);
__decorate([
    (0, graphql_1.Query)(() => get_users_args_1.UserPaginator, { name: 'staffs' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_staffs_args_1.GetStaffsArgs]),
    __metadata("design:returntype", Promise)
], ShopsResolver.prototype, "getStaffs", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_staff_input_1.AddStaffInput]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "addStaff", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopsResolver.prototype, "removeStaff", null);
ShopsResolver = __decorate([
    (0, graphql_1.Resolver)(() => shop_entity_1.Shop),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsResolver);
exports.ShopsResolver = ShopsResolver;
//# sourceMappingURL=shops.resolver.js.map