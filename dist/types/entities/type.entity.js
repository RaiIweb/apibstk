"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSettings = exports.Banner = exports.Type = void 0;
const eager_import_0 = require("../../common/entities/attachment.entity");
const eager_import_1 = require("./type.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
let Type = class Type extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, slug: { type: () => String }, image: { type: () => require("../../common/entities/attachment.entity").Attachment }, icon: { type: () => String }, banners: { nullable: true, type: () => [require("./type.entity").Banner] }, promotional_sliders: { nullable: true, type: () => [require("../../common/entities/attachment.entity").Attachment] }, settings: { nullable: true, type: () => require("./type.entity").TypeSettings } };
    }
};
Type = __decorate([
    (0, graphql_1.InputType)('TypeInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Type);
exports.Type = Type;
let Banner = class Banner extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { title: { nullable: true, type: () => String }, description: { nullable: true, type: () => String }, image: { type: () => require("../../common/entities/attachment.entity").Attachment } };
    }
};
Banner = __decorate([
    (0, graphql_1.InputType)('BannerInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Banner);
exports.Banner = Banner;
let TypeSettings = class TypeSettings {
    static _GRAPHQL_METADATA_FACTORY() {
        return { isHome: { type: () => Boolean }, layoutType: { type: () => String }, productCard: { type: () => String } };
    }
};
TypeSettings = __decorate([
    (0, graphql_1.InputType)('TypeSettingsInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], TypeSettings);
exports.TypeSettings = TypeSettings;
//# sourceMappingURL=type.entity.js.map