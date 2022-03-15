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
exports.ConnectBelongsTo = exports.ProfileInput = void 0;
const eager_import_0 = require("./create-profile.input");
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("../entities/profile.entity");
let ProfileInput = class ProfileInput extends (0, graphql_1.PickType)(profile_entity_1.Profile, [
    'avatar',
    'bio',
    'socials',
    'contact',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { customer: { type: () => require("./create-profile.input").ConnectBelongsTo } };
    }
};
ProfileInput = __decorate([
    (0, graphql_1.InputType)()
], ProfileInput);
exports.ProfileInput = ProfileInput;
let ConnectBelongsTo = class ConnectBelongsTo {
    static _GRAPHQL_METADATA_FACTORY() {
        return { connect: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ConnectBelongsTo.prototype, "connect", void 0);
ConnectBelongsTo = __decorate([
    (0, graphql_1.InputType)()
], ConnectBelongsTo);
exports.ConnectBelongsTo = ConnectBelongsTo;
//# sourceMappingURL=create-profile.input.js.map