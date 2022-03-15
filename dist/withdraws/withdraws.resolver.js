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
exports.WithdrawsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const withdraws_service_1 = require("./withdraws.service");
const withdraw_entity_1 = require("./entities/withdraw.entity");
const create_withdraw_input_1 = require("./dto/create-withdraw.input");
const approve_withdraw_input_1 = require("./dto/approve-withdraw.input");
const get_withdraws_args_1 = require("./dto/get-withdraws.args");
let WithdrawsResolver = class WithdrawsResolver {
    constructor(withdrawsService) {
        this.withdrawsService = withdrawsService;
    }
    createWithdraw(createWithdrawInput) {
        return this.withdrawsService.create(createWithdrawInput);
    }
    async getWithdraws(getWithdrawsArgs) {
        return this.withdrawsService.getWithdraws(getWithdrawsArgs);
    }
    findOne(id) {
        return this.withdrawsService.findOne(id);
    }
    approveWithdraw(updateWithdrawInput) {
        return this.withdrawsService.update(updateWithdrawInput.id, updateWithdrawInput);
    }
    deleteWithdraw(id) {
        return this.withdrawsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => withdraw_entity_1.Withdraw),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_withdraw_input_1.CreateWithdrawInput]),
    __metadata("design:returntype", void 0)
], WithdrawsResolver.prototype, "createWithdraw", null);
__decorate([
    (0, graphql_1.Query)(() => get_withdraws_args_1.WithdrawPaginator, { name: 'withdraws' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_withdraws_args_1.GetWithdrawsArgs]),
    __metadata("design:returntype", Promise)
], WithdrawsResolver.prototype, "getWithdraws", null);
__decorate([
    (0, graphql_1.Query)(() => withdraw_entity_1.Withdraw, { name: 'withdraw', nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WithdrawsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => withdraw_entity_1.Withdraw),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approve_withdraw_input_1.ApproveWithdrawInput]),
    __metadata("design:returntype", void 0)
], WithdrawsResolver.prototype, "approveWithdraw", null);
__decorate([
    (0, graphql_1.Mutation)(() => withdraw_entity_1.Withdraw),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WithdrawsResolver.prototype, "deleteWithdraw", null);
WithdrawsResolver = __decorate([
    (0, graphql_1.Resolver)(() => withdraw_entity_1.Withdraw),
    __metadata("design:paramtypes", [withdraws_service_1.WithdrawsService])
], WithdrawsResolver);
exports.WithdrawsResolver = WithdrawsResolver;
//# sourceMappingURL=withdraws.resolver.js.map