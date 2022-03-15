"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Social = exports.Profile = void 0;
const eager_import_0 = require("../../common/entities/attachment.entity");
const eager_import_1 = require("./profile.entity");
const eager_import_2 = require("./user.entity");
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../../common/entities/attachment.entity");
const core_entity_1 = require("../../common/entities/core.entity");
let Profile = class Profile extends core_entity_1.CoreEntity {
    static _GRAPHQL_METADATA_FACTORY() {
        return { avatar: { nullable: true, type: () => require("../../common/entities/attachment.entity").Attachment }, bio: { nullable: true, type: () => String }, socials: { nullable: true, type: () => [require("./profile.entity").Social] }, contact: { nullable: true, type: () => String }, customer: { nullable: true, type: () => require("./user.entity").User } };
    }
};
Profile = __decorate([
    (0, graphql_1.InputType)('ProfileInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Profile);
exports.Profile = Profile;
let Social = class Social {
    static _GRAPHQL_METADATA_FACTORY() {
        return { type: { type: () => String }, link: { type: () => String } };
    }
};
Social = __decorate([
    (0, graphql_1.InputType)('SocialInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)()
], Social);
exports.Social = Social;
//# sourceMappingURL=profile.entity.js.map