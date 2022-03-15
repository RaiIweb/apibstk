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
exports.CreateCategoryInput = exports.ConnectTypeBelongsTo = void 0;
const eager_import_0 = require("./create-category.input");
const graphql_1 = require("@nestjs/graphql");
const category_entity_1 = require("../entities/category.entity");
let ConnectTypeBelongsTo = class ConnectTypeBelongsTo {
    static _GRAPHQL_METADATA_FACTORY() {
        return { connect: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", Number)
], ConnectTypeBelongsTo.prototype, "connect", void 0);
ConnectTypeBelongsTo = __decorate([
    (0, graphql_1.InputType)()
], ConnectTypeBelongsTo);
exports.ConnectTypeBelongsTo = ConnectTypeBelongsTo;
let CreateCategoryInput = class CreateCategoryInput extends (0, graphql_1.PickType)(category_entity_1.Category, [
    'name',
    'details',
    'icon',
    'image',
]) {
    static _GRAPHQL_METADATA_FACTORY() {
        return { parent: { nullable: true, type: () => Number }, type: { nullable: true, type: () => require("./create-category.input").ConnectTypeBelongsTo } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], CreateCategoryInput.prototype, "parent", void 0);
CreateCategoryInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCategoryInput);
exports.CreateCategoryInput = CreateCategoryInput;
//# sourceMappingURL=create-category.input.js.map