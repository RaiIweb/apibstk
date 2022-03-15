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
exports.Tax = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Tax = class Tax extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_global = true;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, rate: { type: () => Number }, is_global: { type: () => Object }, country: { nullable: true, type: () => String }, state: { nullable: true, type: () => String }, zip: { nullable: true, type: () => String }, city: { nullable: true, type: () => String }, priority: { nullable: true, type: () => Number }, on_shipping: { nullable: true, type: () => Boolean } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { defaultValue: true }),
    __metadata("design:type", Object)
], Tax.prototype, "is_global", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Tax.prototype, "priority", void 0);
Tax = __decorate([
    (0, graphql_1.InputType)('TaxInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Tax);
exports.Tax = Tax;
//# sourceMappingURL=tax.entity.js.map