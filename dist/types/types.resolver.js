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
exports.TypesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const types_service_1 = require("./types.service");
const type_entity_1 = require("./entities/type.entity");
const create_type_input_1 = require("./dto/create-type.input");
const update_type_input_1 = require("./dto/update-type.input");
const get_type_args_1 = require("./dto/get-type.args");
const get_types_args_1 = require("./dto/get-types.args");
let TypesResolver = class TypesResolver {
    constructor(typesService) {
        this.typesService = typesService;
    }
    createType(createTypeInput) {
        return this.typesService.create(createTypeInput);
    }
    async getTypes(getTypesArgs) {
        return this.typesService.getTypes(getTypesArgs);
    }
    async getType(getTypeArgs) {
        return this.typesService.getType(getTypeArgs);
    }
    updateType(updateTypeInput) {
        return this.typesService.update(updateTypeInput.id, updateTypeInput);
    }
    deleteType(id) {
        return this.typesService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => type_entity_1.Type),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_input_1.CreateTypeInput]),
    __metadata("design:returntype", void 0)
], TypesResolver.prototype, "createType", null);
__decorate([
    (0, graphql_1.Query)(() => [type_entity_1.Type], { name: 'types' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_types_args_1.GetTypesArgs]),
    __metadata("design:returntype", Promise)
], TypesResolver.prototype, "getTypes", null);
__decorate([
    (0, graphql_1.Query)(() => type_entity_1.Type, { name: 'type' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_type_args_1.GetTypeArgs]),
    __metadata("design:returntype", Promise)
], TypesResolver.prototype, "getType", null);
__decorate([
    (0, graphql_1.Mutation)(() => type_entity_1.Type),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_type_input_1.UpdateTypeInput]),
    __metadata("design:returntype", void 0)
], TypesResolver.prototype, "updateType", null);
__decorate([
    (0, graphql_1.Mutation)(() => type_entity_1.Type),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TypesResolver.prototype, "deleteType", null);
TypesResolver = __decorate([
    (0, graphql_1.Resolver)(() => type_entity_1.Type),
    __metadata("design:paramtypes", [types_service_1.TypesService])
], TypesResolver);
exports.TypesResolver = TypesResolver;
//# sourceMappingURL=types.resolver.js.map