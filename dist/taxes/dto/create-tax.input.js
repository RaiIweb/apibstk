"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaxInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const tax_entity_1 = require("../entities/tax.entity");
let CreateTaxInput = class CreateTaxInput extends (0, graphql_1.OmitType)(tax_entity_1.Tax, [
    'id',
    'created_at',
    'updated_at',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
CreateTaxInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTaxInput);
exports.CreateTaxInput = CreateTaxInput;
//# sourceMappingURL=create-tax.input.js.map