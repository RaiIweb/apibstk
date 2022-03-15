"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveWithdrawInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const withdraw_entity_1 = require("../entities/withdraw.entity");
let ApproveWithdrawInput = class ApproveWithdrawInput extends (0, graphql_1.PickType)(withdraw_entity_1.Withdraw, [
    'id',
    'status',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
ApproveWithdrawInput = __decorate([
    (0, graphql_1.InputType)()
], ApproveWithdrawInput);
exports.ApproveWithdrawInput = ApproveWithdrawInput;
//# sourceMappingURL=approve-withdraw.input.js.map