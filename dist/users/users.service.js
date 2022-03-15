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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const uuid_1 = require("uuid");
const users_json_1 = __importDefault(require("./users.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const class_transformer_1 = require("class-transformer");
const users = (0, class_transformer_1.plainToClass)(user_entity_1.User, users_json_1.default);
const options = {
    keys: ['name', 'type.slug', 'categories.slug', 'status'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(users, options);
let UsersService = class UsersService {
    constructor() {
        this.users = users;
    }
    async register(createUserInput) {
        const user = Object.assign(Object.assign(Object.assign({ id: (0, uuid_1.v4)() }, users[0]), createUserInput), { created_at: new Date(), updated_at: new Date() });
        this.users.push(user);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async login(loginInput) {
        console.log(loginInput);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async changePassword(changePasswordInput) {
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async forgetPassword(forgetPasswordInput) {
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async verifyForgetPasswordToken(verifyForgetPasswordTokenInput) {
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async resetPassword(resetPasswordInput) {
        return {
            success: true,
            message: 'Password change successful',
        };
    }
    async getUsers({ text, first, page }) {
        var _a;
        const startIndex = (page - 1) * first;
        const endIndex = page * first;
        let data = this.users;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        return {
            data: results,
            paginatorInfo: (0, paginate_1.paginate)(data.length, page, first, results.length),
        };
    }
    getUser(getUserArgs) {
        return this.users.find((user) => user.id === getUserArgs.id);
    }
    me() {
        return this.users[0];
    }
    updateUser(id, updateUserInput) {
        return this.users[0];
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map