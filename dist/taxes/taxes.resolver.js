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
exports.TaxesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const taxes_service_1 = require("./taxes.service");
const tax_entity_1 = require("./entities/tax.entity");
const create_tax_input_1 = require("./dto/create-tax.input");
const update_tax_input_1 = require("./dto/update-tax.input");
const get_taxes_args_1 = require("./dto/get-taxes.args");
let TaxesResolver = class TaxesResolver {
    constructor(taxesService) {
        this.taxesService = taxesService;
    }
    createTax(createTaxInput) {
        return this.taxesService.create(createTaxInput);
    }
    findAll(getTaxesArgs) {
        return this.taxesService.findAll(getTaxesArgs);
    }
    findOne(id) {
        return this.taxesService.findOne(id);
    }
    updateTax(updateTaxInput) {
        return this.taxesService.update(updateTaxInput.id, updateTaxInput);
    }
    deleteTax(id) {
        return this.taxesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => tax_entity_1.Tax),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tax_input_1.CreateTaxInput]),
    __metadata("design:returntype", void 0)
], TaxesResolver.prototype, "createTax", null);
__decorate([
    (0, graphql_1.Query)(() => [tax_entity_1.Tax], { name: 'taxClasses' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_taxes_args_1.GetTaxesArgs]),
    __metadata("design:returntype", void 0)
], TaxesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => tax_entity_1.Tax, { name: 'taxClass' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaxesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => tax_entity_1.Tax),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tax_input_1.UpdateTaxInput]),
    __metadata("design:returntype", void 0)
], TaxesResolver.prototype, "updateTax", null);
__decorate([
    (0, graphql_1.Mutation)(() => tax_entity_1.Tax),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaxesResolver.prototype, "deleteTax", null);
TaxesResolver = __decorate([
    (0, graphql_1.Resolver)(() => tax_entity_1.Tax),
    __metadata("design:paramtypes", [taxes_service_1.TaxesService])
], TaxesResolver);
exports.TaxesResolver = TaxesResolver;
//# sourceMappingURL=taxes.resolver.js.map