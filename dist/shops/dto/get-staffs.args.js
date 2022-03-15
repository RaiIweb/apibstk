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
exports.GetStaffsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const pagination_args_1 = require("../../common/dto/pagination.args");
let GetStaffsArgs = class GetStaffsArgs extends pagination_args_1.PaginationArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { orderBy: { nullable: true, type: () => String }, sortedBy: { nullable: true, type: () => String }, shop_id: { nullable: true, type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], GetStaffsArgs.prototype, "shop_id", void 0);
GetStaffsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GetStaffsArgs);
exports.GetStaffsArgs = GetStaffsArgs;
//# sourceMappingURL=get-staffs.args.js.map