"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShippingInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const shipping_entity_1 = require("../entities/shipping.entity");
let CreateShippingInput = class CreateShippingInput extends (0, graphql_1.PickType)(shipping_entity_1.Shipping, [
    'name',
    'amount',
    'is_global',
    'type',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
CreateShippingInput = __decorate([
    (0, graphql_1.InputType)()
], CreateShippingInput);
exports.CreateShippingInput = CreateShippingInput;
//# sourceMappingURL=create-shipping.input.js.map