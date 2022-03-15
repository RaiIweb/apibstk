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
exports.CouponsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const coupon_entity_1 = require("./entities/coupon.entity");
const coupons_json_1 = __importDefault(require("./coupons.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const coupons = (0, class_transformer_1.plainToClass)(coupon_entity_1.Coupon, coupons_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(coupons, options);
let CouponsService = class CouponsService {
    constructor() {
        this.coupons = coupons;
    }
    create(createCouponInput) {
        return this.coupons[0];
    }
    getCoupons({ text, first, page }) {
        var _a;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.coupons;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    getCoupon({ id, code }) {
        if (id) {
            return this.coupons.find((p) => p.id === Number(id));
        }
        return this.coupons.find((p) => p.code === code);
    }
    update(id, updateCouponInput) {
        return this.coupons[0];
    }
    remove(id) {
        return `This action removes a #${id} coupon`;
    }
    verifyCoupon(code) {
        return {
            is_valid: true,
            coupon: this.coupons[0],
        };
    }
};
CouponsService = __decorate([
    (0, common_1.Injectable)()
], CouponsService);
exports.CouponsService = CouponsService;
//# sourceMappingURL=coupons.service.js.map