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
exports.UpdateOrderStatusInput = exports.CreateOrderStatusInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_status_entity_1 = require("../entities/order-status.entity");
let CreateOrderStatusInput = class CreateOrderStatusInput extends (0, graphql_1.PickType)(order_status_entity_1.OrderStatus, [
    'name',
    'color',
    'serial',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
CreateOrderStatusInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderStatusInput);
exports.CreateOrderStatusInput = CreateOrderStatusInput;
let UpdateOrderStatusInput = class UpdateOrderStatusInput extends (0, graphql_1.PartialType)(CreateOrderStatusInput) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], UpdateOrderStatusInput.prototype, "id", void 0);
UpdateOrderStatusInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateOrderStatusInput);
exports.UpdateOrderStatusInput = UpdateOrderStatusInput;
//# sourceMappingURL=create-order-status.input.js.map