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
exports.WalletsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const wallets_service_1 = require("./wallets.service");
const wallet_entity_1 = require("./entities/wallet.entity");
const add_points_input_1 = require("./dto/add-points.input");
let WalletsResolver = class WalletsResolver {
    constructor(walletsService) {
        this.walletsService = walletsService;
    }
    addPoints(input) {
        return this.walletsService.create(input);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_points_input_1.AddPointsInput]),
    __metadata("design:returntype", void 0)
], WalletsResolver.prototype, "addPoints", null);
WalletsResolver = __decorate([
    (0, graphql_1.Resolver)(() => wallet_entity_1.Wallet),
    __metadata("design:paramtypes", [wallets_service_1.WalletsService])
], WalletsResolver);
exports.WalletsResolver = WalletsResolver;
//# sourceMappingURL=wallets.resolver.js.map