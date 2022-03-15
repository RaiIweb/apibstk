"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
let TagsService = class TagsService {
    constructor() {
        this.tags = [];
    }
    create(_a) {
        var { type } = _a, createTagInput = __rest(_a, ["type"]);
        const newTag = Object.assign(Object.assign({ id: this.tags.length + 1, slug: createTagInput.name }, createTagInput), { created_at: new Date(), updated_at: new Date() });
        this.tags.push(newTag);
        return newTag;
    }
    findAll({ page, first }) {
        return {
            data: this.tags,
            paginatorInfo: (0, paginate_1.paginate)(this.tags.length, page, first, this.tags.length),
        };
    }
    findOne(id) {
        return this.tags.find((tag) => tag.id === Number(id));
    }
    update(id, updateTagInput) {
        return this.tags[0];
    }
    remove(id) {
        return `This action removes a #${id} tag`;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)()
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map