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
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const shop_entity_1 = require("./entities/shop.entity");
const fuse_js_1 = __importDefault(require("fuse.js"));
const shops_json_1 = __importDefault(require("./shops.json"));
const paginate_1 = require("../common/pagination/paginate");
const shops = (0, class_transformer_1.plainToClass)(shop_entity_1.Shop, shops_json_1.default);
const options = {
    keys: ['name', 'type.slug'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(shops, options);
let ShopsService = class ShopsService {
    constructor() {
        this.shops = shops;
    }
    create(createShopInput) {
        return this.shops[0];
    }
    getShops({ text, first, page }) {
        var _a;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.shops;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    getStaffs({ shop_id, first, page }) {
        var _a, _b;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let staffs = [];
        if (shop_id) {
            staffs = (_b = (_a = this.shops.find((p) => p.id === Number(shop_id))) === null || _a === void 0 ? void 0 : _a.staffs) !== null && _b !== void 0 ? _b : [];
        }
        const results = staffs === null || staffs === void 0 ? void 0 : staffs.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(staffs === null || staffs === void 0 ? void 0 : staffs.length, page, first, results === null || results === void 0 ? void 0 : results.length),
        };
    }
    getShop({ id, slug }) {
        if (id) {
            return this.shops.find((p) => p.id === id);
        }
        return this.shops.find((p) => p.slug === slug);
    }
    update(id, updateShopInput) {
        return this.shops[0];
    }
    remove(id) {
        return `This action removes a #${id} shop`;
    }
};
ShopsService = __decorate([
    (0, common_1.Injectable)()
], ShopsService);
exports.ShopsService = ShopsService;
//# sourceMappingURL=shops.service.js.map