"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
let RefundsService = class RefundsService {
    create(createRefundInput) {
        return Object.assign({ id: 1 }, createRefundInput);
    }
    findAll({ first, page }) {
        const data = [];
        const results = [];
        return {
            data: data,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    findOne(id) {
        return `This action returns a #${id} refund`;
    }
    update(id, updateRefundInput) {
        return `This action updates a #${id} refund`;
    }
    remove(id) {
        return `This action removes a #${id} refund`;
    }
};
RefundsService = __decorate([
    (0, common_1.Injectable)()
], RefundsService);
exports.RefundsService = RefundsService;
//# sourceMappingURL=refunds.service.js.map