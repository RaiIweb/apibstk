"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAddressInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const address_entity_1 = require("../entities/address.entity");
let CreateAddressInput = class CreateAddressInput extends (0, graphql_1.PickType)(address_entity_1.Address, [
    'title',
    'type',
    'default',
    'customer',
    'address',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
CreateAddressInput = __decorate([
    (0, graphql_1.InputType)()
], CreateAddressInput);
exports.CreateAddressInput = CreateAddressInput;
//# sourceMappingURL=create-address.input.js.map