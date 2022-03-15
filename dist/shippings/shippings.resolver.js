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
exports.ShippingsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const shippings_service_1 = require("./shippings.service");
const shipping_entity_1 = require("./entities/shipping.entity");
const create_shipping_input_1 = require("./dto/create-shipping.input");
const update_shipping_input_1 = require("./dto/update-shipping.input");
const get_shippings_args_1 = require("./dto/get-shippings.args");
let ShippingsResolver = class ShippingsResolver {
    constructor(shippingsService) {
        this.shippingsService = shippingsService;
    }
    createShipping(createShippingInput) {
        return this.shippingsService.create(createShippingInput);
    }
    findAll(getShippingsArgs) {
        return this.shippingsService.findAll(getShippingsArgs);
    }
    findOne(id) {
        return this.shippingsService.findOne(id);
    }
    updateShipping(updateShippingInput) {
        return this.shippingsService.update(updateShippingInput);
    }
    deleteShipping(id) {
        return this.shippingsService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => shipping_entity_1.Shipping),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shipping_input_1.CreateShippingInput]),
    __metadata("design:returntype", void 0)
], ShippingsResolver.prototype, "createShipping", null);
__decorate([
    (0, graphql_1.Query)(() => [shipping_entity_1.Shipping], { name: 'shippingClasses' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shippings_args_1.GetShippingsArgs]),
    __metadata("design:returntype", void 0)
], ShippingsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => shipping_entity_1.Shipping, { name: 'shippingClass' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => shipping_entity_1.Shipping),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_shipping_input_1.UpdateShippingInput]),
    __metadata("design:returntype", void 0)
], ShippingsResolver.prototype, "updateShipping", null);
__decorate([
    (0, graphql_1.Mutation)(() => shipping_entity_1.Shipping),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShippingsResolver.prototype, "deleteShipping", null);
ShippingsResolver = __decorate([
    (0, graphql_1.Resolver)(() => shipping_entity_1.Shipping),
    __metadata("design:paramtypes", [shippings_service_1.ShippingsService])
], ShippingsResolver);
exports.ShippingsResolver = ShippingsResolver;
//# sourceMappingURL=shippings.resolver.js.map