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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const imports_service_1 = require("./imports.service");
const graphql_upload_1 = require("graphql-upload");
let ImportsResolver = class ImportsResolver {
    constructor(importsService) {
        this.importsService = importsService;
    }
    importAttributes(shop_id, csv) {
        console.log(shop_id, csv);
        return true;
    }
    importProducts(shop_id, csv) {
        console.log(shop_id, csv);
        return true;
    }
    importVariationOptions(shop_id, csv) {
        console.log(shop_id, csv);
        return true;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('shop_id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('csv', { type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_a = typeof graphql_upload_1.GraphQLUpload !== "undefined" && graphql_upload_1.GraphQLUpload) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], ImportsResolver.prototype, "importAttributes", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('shop_id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('csv', { type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof graphql_upload_1.GraphQLUpload !== "undefined" && graphql_upload_1.GraphQLUpload) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ImportsResolver.prototype, "importProducts", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('shop_id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Args)('csv', { type: () => graphql_upload_1.GraphQLUpload })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof graphql_upload_1.GraphQLUpload !== "undefined" && graphql_upload_1.GraphQLUpload) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ImportsResolver.prototype, "importVariationOptions", null);
ImportsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [imports_service_1.ImportsService])
], ImportsResolver);
exports.ImportsResolver = ImportsResolver;
//# sourceMappingURL=imports.resolver.js.map