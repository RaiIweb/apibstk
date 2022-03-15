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
exports.UpdateRefundInput = void 0;
const eager_import_0 = require("../entities/refund.entity");
const graphql_1 = require("@nestjs/graphql");
let UpdateRefundInput = class UpdateRefundInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number }, status: { type: () => require("../entities/refund.entity").RefundStatus } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], UpdateRefundInput.prototype, "id", void 0);
UpdateRefundInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateRefundInput);
exports.UpdateRefundInput = UpdateRefundInput;
//# sourceMappingURL=update-refund.input.js.map