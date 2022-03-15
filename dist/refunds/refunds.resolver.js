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
exports.RefundsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const refunds_service_1 = require("./refunds.service");
const refund_entity_1 = require("./entities/refund.entity");
const create_refund_input_1 = require("./dto/create-refund.input");
const update_refund_input_1 = require("./dto/update-refund.input");
const get_refunds_args_1 = require("./dto/get-refunds.args");
let RefundsResolver = class RefundsResolver {
    constructor(refundsService) {
        this.refundsService = refundsService;
    }
    createRefund(createRefundInput) {
        return this.refundsService.create(createRefundInput);
    }
    findAll(getRefundsArgs) {
        return this.refundsService.findAll(getRefundsArgs);
    }
    findOne(id) {
        return this.refundsService.findOne(id);
    }
    updateRefund(updateRefundInput) {
        return this.refundsService.update(updateRefundInput.id, updateRefundInput);
    }
    deleteRefund(id) {
        return this.refundsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => refund_entity_1.Refund),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_input_1.CreateRefundInput]),
    __metadata("design:returntype", void 0)
], RefundsResolver.prototype, "createRefund", null);
__decorate([
    (0, graphql_1.Query)(() => get_refunds_args_1.RefundPaginator, { name: 'refunds' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_refunds_args_1.GetRefundsArgs]),
    __metadata("design:returntype", void 0)
], RefundsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => refund_entity_1.Refund, { name: 'refund' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RefundsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => refund_entity_1.Refund),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_refund_input_1.UpdateRefundInput]),
    __metadata("design:returntype", void 0)
], RefundsResolver.prototype, "updateRefund", null);
__decorate([
    (0, graphql_1.Mutation)(() => refund_entity_1.Refund),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RefundsResolver.prototype, "deleteRefund", null);
RefundsResolver = __decorate([
    (0, graphql_1.Resolver)(() => refund_entity_1.Refund),
    __metadata("design:paramtypes", [refunds_service_1.RefundsService])
], RefundsResolver);
exports.RefundsResolver = RefundsResolver;
//# sourceMappingURL=refunds.resolver.js.map