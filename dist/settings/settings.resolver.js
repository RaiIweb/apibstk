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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const settings_service_1 = require("./settings.service");
const setting_entity_1 = require("./entities/setting.entity");
const create_setting_input_1 = require("./dto/create-setting.input");
const update_setting_input_1 = require("./dto/update-setting.input");
let SettingsResolver = class SettingsResolver {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    findAll() {
        return this.settingsService.getSettings();
    }
    updateSettings(updateSettingInput) {
        return this.settingsService.updateSettings(updateSettingInput);
    }
    contactUs(contactInput) {
        console.log(contactInput);
        return {
            message: 'Thanks for contacting us!',
            success: true,
        };
    }
};
__decorate([
    (0, graphql_1.Query)(() => setting_entity_1.Setting, { name: 'settings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SettingsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => setting_entity_1.Setting),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_setting_input_1.SettingsInput]),
    __metadata("design:returntype", void 0)
], SettingsResolver.prototype, "updateSettings", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_setting_input_1.ContactResponse),
    __param(0, (0, graphql_1.Args)('input', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_setting_input_1.ContactInput]),
    __metadata("design:returntype", void 0)
], SettingsResolver.prototype, "contactUs", null);
SettingsResolver = __decorate([
    (0, graphql_1.Resolver)(() => setting_entity_1.Setting),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsResolver);
exports.SettingsResolver = SettingsResolver;
//# sourceMappingURL=settings.resolver.js.map