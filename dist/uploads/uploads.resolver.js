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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const attachment_entity_1 = require("../common/entities/attachment.entity");
const graphql_upload_1 = require("graphql-upload");
const uploads_service_1 = require("./uploads.service");
let UploadsResolver = class UploadsResolver {
    constructor(uploadsService) {
        this.uploadsService = uploadsService;
    }
    upload(attachment) {
        console.log('upload', attachment);
        return [
            {
                id: '1abc',
                original: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/881/aatik-tasneem-7omHUGhhmZ0-unsplash%402x.png',
                thumbnail: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/881/conversions/aatik-tasneem-7omHUGhhmZ0-unsplash%402x-thumbnail.jpg',
            },
        ];
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => [attachment_entity_1.Attachment]),
    __param(0, (0, graphql_1.Args)({ name: 'attachment', type: () => [graphql_upload_1.GraphQLUpload], nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof graphql_upload_1.FileUpload !== "undefined" && graphql_upload_1.FileUpload) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], UploadsResolver.prototype, "upload", null);
UploadsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService])
], UploadsResolver);
exports.UploadsResolver = UploadsResolver;
//# sourceMappingURL=uploads.resolver.js.map