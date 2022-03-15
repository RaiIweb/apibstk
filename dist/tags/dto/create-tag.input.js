"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagInput = void 0;
const eager_import_0 = require("../../categories/dto/create-category.input");
const graphql_1 = require("@nestjs/graphql");
const create_category_input_1 = require("../../categories/dto/create-category.input");
const tag_entity_1 = require("../entities/tag.entity");
let CreateTagInput = class CreateTagInput extends (0, graphql_1.PickType)(tag_entity_1.Tag, [
    'name',
    'details',
    'image',
    'icon',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { type: { nullable: true, type: () => require("../../categories/dto/create-category.input").ConnectTypeBelongsTo } };
    }
};
CreateTagInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTagInput);
exports.CreateTagInput = CreateTagInput;
//# sourceMappingURL=create-tag.input.js.map