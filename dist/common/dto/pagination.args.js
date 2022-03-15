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
exports.PaginationArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
let PaginationArgs = class PaginationArgs {
    constructor() {
        this.first = 15;
        this.page = 1;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { first: { nullable: true, type: () => Number }, page: { nullable: true, type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "first", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationArgs.prototype, "page", void 0);
PaginationArgs = __decorate([
    (0, graphql_1.ArgsType)()
], PaginationArgs);
exports.PaginationArgs = PaginationArgs;
//# sourceMappingURL=pagination.args.js.map