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
exports.Location = exports.ShopSocials = exports.ContactDetails = exports.FacebookSettings = exports.GoogleSettings = exports.SeoSettings = exports.DeliveryTime = exports.SettingsOptions = exports.Setting = void 0;
const eager_import_0 = require("./setting.entity");
const eager_import_1 = require("../../common/entities/attachment.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
let Setting = class Setting extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { options: { type: () => require("./setting.entity").SettingsOptions } };
    }
};
Setting = __decorate([
    (0, graphql_1.InputType)('SettingInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Setting);
exports.Setting = Setting;
let SettingsOptions = class SettingsOptions {
    static _GRAPHQL_METADATA_FACTORY() {
        return { siteTitle: { type: () => String }, siteSubtitle: { type: () => String }, currency: { type: () => String }, minimumOrderAmount: { type: () => Number }, currencyToWalletRatio: { nullable: true, type: () => Number }, signupPoints: { nullable: true, type: () => Number }, deliveryTime: { type: () => [require("./setting.entity").DeliveryTime] }, logo: { type: () => require("../../common/entities/attachment.entity").Attachment }, taxClass: { type: () => String }, shippingClass: { type: () => String }, seo: { type: () => require("./setting.entity").SeoSettings }, google: { nullable: true, type: () => require("./setting.entity").GoogleSettings }, facebook: { nullable: true, type: () => require("./setting.entity").FacebookSettings }, contactDetails: { type: () => require("./setting.entity").ContactDetails } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SettingsOptions.prototype, "currencyToWalletRatio", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], SettingsOptions.prototype, "signupPoints", void 0);
SettingsOptions = __decorate([
    (0, graphql_1.InputType)('SettingsOptionsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], SettingsOptions);
exports.SettingsOptions = SettingsOptions;
let DeliveryTime = class DeliveryTime {
    static _GRAPHQL_METADATA_FACTORY() {
        return { title: { type: () => String }, description: { type: () => String } };
    }
};
DeliveryTime = __decorate([
    (0, graphql_1.InputType)('DeliveryTimeInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], DeliveryTime);
exports.DeliveryTime = DeliveryTime;
let SeoSettings = class SeoSettings {
    static _GRAPHQL_METADATA_FACTORY() {
        return { metaTitle: { nullable: true, type: () => String }, metaDescription: { nullable: true, type: () => String }, ogTitle: { nullable: true, type: () => String }, ogDescription: { nullable: true, type: () => String }, ogImage: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, twitterHandle: { nullable: true, type: () => String }, twitterCardType: { nullable: true, type: () => String }, metaTags: { nullable: true, type: () => String }, canonicalUrl: { nullable: true, type: () => String } };
    }
};
SeoSettings = __decorate([
    (0, graphql_1.InputType)('SeoSettingsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], SeoSettings);
exports.SeoSettings = SeoSettings;
let GoogleSettings = class GoogleSettings {
    static _GRAPHQL_METADATA_FACTORY() {
        return { isEnable: { type: () => Boolean }, tagManagerId: { type: () => String } };
    }
};
GoogleSettings = __decorate([
    (0, graphql_1.InputType)('GoogleSettingsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], GoogleSettings);
exports.GoogleSettings = GoogleSettings;
let FacebookSettings = class FacebookSettings {
    static _GRAPHQL_METADATA_FACTORY() {
        return { isEnable: { type: () => Boolean }, appId: { type: () => String }, pageId: { type: () => String } };
    }
};
FacebookSettings = __decorate([
    (0, graphql_1.InputType)('FacebookSettingsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], FacebookSettings);
exports.FacebookSettings = FacebookSettings;
let ContactDetails = class ContactDetails {
    static _GRAPHQL_METADATA_FACTORY() {
        return { socials: { type: () => [require("./setting.entity").ShopSocials] }, contact: { type: () => String }, location: { type: () => require("./setting.entity").Location }, website: { type: () => String } };
    }
};
ContactDetails = __decorate([
    (0, graphql_1.InputType)('ContactDetailsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], ContactDetails);
exports.ContactDetails = ContactDetails;
let ShopSocials = class ShopSocials {
    static _GRAPHQL_METADATA_FACTORY() {
        return { icon: { type: () => String }, url: { type: () => String } };
    }
};
ShopSocials = __decorate([
    (0, graphql_1.InputType)('ShopSocialsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], ShopSocials);
exports.ShopSocials = ShopSocials;
let Location = class Location {
    static _GRAPHQL_METADATA_FACTORY() {
        return { lat: { nullable: true, type: () => Number }, lng: { nullable: true, type: () => Number }, city: { nullable: true, type: () => String }, state: { nullable: true, type: () => String }, country: { nullable: true, type: () => String }, zip: { nullable: true, type: () => String }, formattedAddress: { nullable: true, type: () => String } };
    }
};
Location = __decorate([
    (0, graphql_1.InputType)('LocationInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Location);
exports.Location = Location;
//# sourceMappingURL=setting.entity.js.map