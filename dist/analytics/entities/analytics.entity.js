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
exports.TotalYearSaleByMonth = exports.Analytics = void 0;
const eager_import_0 = require("./analytics.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
let Analytics = class Analytics extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { totalRevenue: { nullable: true, type: () => Number }, totalShops: { nullable: true, type: () => Number }, todaysRevenue: { nullable: true, type: () => Number }, totalOrders: { nullable: true, type: () => Number }, newCustomers: { nullable: true, type: () => Number }, totalYearSaleByMonth: { nullable: true, type: () => [require("./analytics.entity").TotalYearSaleByMonth] } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Analytics.prototype, "totalOrders", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Analytics.prototype, "newCustomers", void 0);
Analytics = __decorate([
    (0, graphql_1.InputType)('AttributeInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Analytics);
exports.Analytics = Analytics;
let TotalYearSaleByMonth = class TotalYearSaleByMonth {
    static _GRAPHQL_METADATA_FACTORY() {
        return { total: { nullable: true, type: () => Number }, month: { nullable: true, type: () => String } };
    }
};
TotalYearSaleByMonth = __decorate([
    (0, graphql_1.ObjectType)()
], TotalYearSaleByMonth);
exports.TotalYearSaleByMonth = TotalYearSaleByMonth;
//# sourceMappingURL=analytics.entity.js.map