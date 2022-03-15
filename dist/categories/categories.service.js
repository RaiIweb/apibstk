"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const categories_json_1 = __importDefault(require("./categories.json"));
const category_entity_1 = require("./entities/category.entity");
const paginate_1 = require("../common/pagination/paginate");
const categories = (0, class_transformer_1.plainToClass)(category_entity_1.Category, categories_json_1.default);
const options = {
    keys: ['name', 'type.slug'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(categories, options);
let CategoriesService = class CategoriesService {
    constructor() {
        this.categories = categories;
    }
    create(createCategoryInput) {
        return this.categories[0];
    }
    getCategories({ text, first, page, hasType, parent }) {
        var _a, _b;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.categories;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        if (hasType === null || hasType === void 0 ? void 0 : hasType.value) {
            data = (_b = fuse.search(hasType.value)) === null || _b === void 0 ? void 0 : _b.map(({ item }) => item);
        }
        if (parent === null) {
            data = data.filter(({ parent: parentValue }) => parentValue === null);
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    getCategory({ id, slug }) {
        if (id) {
            return this.categories.find((p) => p.id === Number(id));
        }
        return this.categories.find((p) => p.slug === slug);
    }
    update(id, updateCategoryInput) {
        return this.categories[0];
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map