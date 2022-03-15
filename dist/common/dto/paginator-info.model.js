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
exports.PaginatorInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
let PaginatorInfo = class PaginatorInfo {
    static _GRAPHQL_METADATA_FACTORY() {
        return { count: { type: () => Number }, currentPage: { type: () => Number }, firstItem: { type: () => Number }, hasMorePages: { type: () => Boolean }, lastItem: { type: () => Number }, lastPage: { type: () => Number }, perPage: { type: () => Number }, total: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "currentPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "firstItem", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "lastItem", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "lastPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "perPage", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginatorInfo.prototype, "total", void 0);
PaginatorInfo = __decorate([
    (0, graphql_1.ObjectType)()
], PaginatorInfo);
exports.PaginatorInfo = PaginatorInfo;
//# sourceMappingURL=paginator-info.model.js.map