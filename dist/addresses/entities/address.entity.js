"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = exports.Address = exports.AddressType = void 0;
const eager_import_0 = require("./address.entity");
const eager_import_1 = require("../../users/entities/user.entity");
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const user_entity_1 = require("../../users/entities/user.entity");
var AddressType;
(function (AddressType) {
    AddressType["BILLING"] = "billing";
    AddressType["SHIPPING"] = "shipping";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
(0, graphql_1.registerEnumType)(AddressType, { name: 'AddressType' });
let Address = class Address extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { title: { type: () => String }, default: { type: () => Boolean }, address: { type: () => require("./address.entity").UserAddress }, type: { type: () => require("./address.entity").AddressType }, customer: { type: () => require("../../users/entities/user.entity").User } };
    }
};
Address = __decorate([
    (0, graphql_1.InputType)('AddressInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Address);
exports.Address = Address;
let UserAddress = class UserAddress {
    static _GRAPHQL_METADATA_FACTORY() {
        return { street_address: { type: () => String }, country: { type: () => String }, city: { type: () => String }, state: { type: () => String }, zip: { type: () => String } };
    }
};
UserAddress = __decorate([
    (0, graphql_1.InputType)('UserAddressInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], UserAddress);
exports.UserAddress = UserAddress;
//# sourceMappingURL=address.entity.js.map