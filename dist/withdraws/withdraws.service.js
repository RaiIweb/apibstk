"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
let WithdrawsService = class WithdrawsService {
    constructor() {
        this.withdraws = [];
    }
    create(createWithdrawInput) {
        return Object.assign({ id: 1 }, createWithdrawInput);
    }
    getWithdraws({ first, page, status, shop_id, }) {
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.withdraws;
        if (shop_id) {
            data = this.withdraws.filter((p) => p.shop_id === shop_id);
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    findOne(id) {
        return this.withdraws[0];
    }
    update(id, updateWithdrawInput) {
        return this.withdraws[0];
    }
    remove(id) {
        return `This action removes a #${id} withdraw`;
    }
};
WithdrawsService = __decorate([
    (0, common_1.Injectable)()
], WithdrawsService);
exports.WithdrawsService = WithdrawsService;
//# sourceMappingURL=withdraws.service.js.map