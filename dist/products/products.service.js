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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const product_entity_1 = require("./entities/product.entity");
const products_json_1 = __importDefault(require("./products.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const products = (0, class_transformer_1.plainToClass)(product_entity_1.Product, products_json_1.default);
const options = {
    keys: ['name', 'type.slug', 'categories.slug', 'status'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(products, options);
let ProductsService = class ProductsService {
    constructor() {
        this.products = products;
    }
    create(createProductInput) {
        return 'This action adds a new product';
    }
    getProducts({ text, first, page, hasType, hasCategories, status, shop_id, }) {
        var _a, _b, _c;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.products;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        if (hasType === null || hasType === void 0 ? void 0 : hasType.value) {
            data = (_b = fuse.search(hasType.value)) === null || _b === void 0 ? void 0 : _b.map(({ item }) => item);
        }
        if (hasCategories === null || hasCategories === void 0 ? void 0 : hasCategories.value) {
            data = (_c = fuse
                .search(hasCategories.value)) === null || _c === void 0 ? void 0 : _c.map(({ item }) => item);
        }
        if (shop_id) {
            data = this.products.filter((p) => p.shop_id === Number(shop_id));
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    getProduct({ id, slug }) {
        if (id) {
            return this.products.find((p) => p.id === Number(id));
        }
        return this.products.find((p) => p.slug === slug);
    }
    getRelatedProducts({ id, slug }) {
        var _a;
        return (_a = this.products) === null || _a === void 0 ? void 0 : _a.filter((p) => p.type.slug === slug).slice(0, 10);
    }
    getPopularProducts({ shop_id, limit }) {
        var _a;
        return (_a = this.products) === null || _a === void 0 ? void 0 : _a.slice(0, limit);
    }
    update(id, updateProductInput) {
        return this.products[0];
    }
    remove(id) {
        return this.products.find((p) => p.id === id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map