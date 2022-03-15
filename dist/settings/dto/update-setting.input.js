"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsOptionsInput = exports.SettingsInput = void 0;
const eager_import_0 = require("./update-setting.input");
const graphql_1 = require("@nestjs/graphql");
const setting_entity_1 = require("../entities/setting.entity");
let SettingsInput = class SettingsInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { options: { type: () => require("./update-setting.input").SettingsOptionsInput } };
    }
};
SettingsInput = __decorate([
    (0, graphql_1.InputType)()
], SettingsInput);
exports.SettingsInput = SettingsInput;
let SettingsOptionsInput = class SettingsOptionsInput extends (0, graphql_1.PartialType)(setting_entity_1.SettingsOptions) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
SettingsOptionsInput = __decorate([
    (0, graphql_1.InputType)()
], SettingsOptionsInput);
exports.SettingsOptionsInput = SettingsOptionsInput;
//# sourceMappingURL=update-setting.input.js.map