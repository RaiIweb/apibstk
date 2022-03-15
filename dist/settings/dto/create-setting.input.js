"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactResponse = exports.ContactInput = exports.CreateSettingsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_mutation_output_model_1 = require("../../common/dto/core-mutation-output.model");
const setting_entity_1 = require("../entities/setting.entity");
let CreateSettingsInput = class CreateSettingsInput extends (0, graphql_1.OmitType)(setting_entity_1.Setting, [
    'created_at',
    'updated_at',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
CreateSettingsInput = __decorate([
    (0, graphql_1.InputType)()
], CreateSettingsInput);
exports.CreateSettingsInput = CreateSettingsInput;
let ContactInput = class ContactInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { subject: { type: () => String }, email: { type: () => String }, name: { type: () => String }, description: { type: () => String } };
    }
};
ContactInput = __decorate([
    (0, graphql_1.InputType)()
], ContactInput);
exports.ContactInput = ContactInput;
let ContactResponse = class ContactResponse extends core_mutation_output_model_1.CoreMutationOutput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
ContactResponse = __decorate([
    (0, graphql_1.ObjectType)()
], ContactResponse);
exports.ContactResponse = ContactResponse;
//# sourceMappingURL=create-setting.input.js.map