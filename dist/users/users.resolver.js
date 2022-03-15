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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const create_user_input_1 = require("./dto/create-user.input");
const update_user_input_1 = require("./dto/update-user.input");
const get_user_args_1 = require("./dto/get-user.args");
const get_users_args_1 = require("./dto/get-users.args");
const success_response_model_1 = require("../common/dto/success-response.model");
const create_profile_input_1 = require("./dto/create-profile.input");
const profile_entity_1 = require("./entities/profile.entity");
const update_profile_args_1 = require("./dto/update-profile.args");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async register(createUserInput) {
        return this.usersService.register(createUserInput);
    }
    async login(loginInput) {
        return this.usersService.login(loginInput);
    }
    async socialLogin(socialLoginInput) {
        console.log(socialLoginInput);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async otpLogin(otpLoginInput) {
        console.log(otpLoginInput);
        return {
            token: 'jwt token',
            permissions: ['super_admin', 'customer'],
        };
    }
    async verifyOtpCode(verifyOtpInput) {
        console.log(verifyOtpInput);
        return {
            message: 'success',
            success: true,
        };
    }
    async sendOtpCode(otpInput) {
        console.log(otpInput);
        return {
            message: 'success',
            success: true,
            id: '1',
            provider: 'google',
            phone_number: '+919494949494',
            is_contact_exist: true,
        };
    }
    async logout() {
        return true;
    }
    async changePassword(changePasswordInput) {
        return this.usersService.changePassword(changePasswordInput);
    }
    async forgetPassword(forgetPasswordInput) {
        return this.usersService.forgetPassword(forgetPasswordInput);
    }
    async verifyForgetPasswordToken(verifyForgetPasswordTokenInput) {
        return this.usersService.verifyForgetPasswordToken(verifyForgetPasswordTokenInput);
    }
    async resetPassword(resetPasswordInput) {
        return this.usersService.resetPassword(resetPasswordInput);
    }
    async getUsers(getUsersArgs) {
        return this.usersService.getUsers(getUsersArgs);
    }
    async me() {
        return this.usersService.me();
    }
    getUser(getUserArgs) {
        return this.usersService.getUser(getUserArgs);
    }
    updateUser(updateUserInput) {
        return this.usersService.updateUser(updateUserInput.id, updateUserInput);
    }
    activeUser(id) {
        console.log(id);
    }
    banUser(id) {
        console.log(id);
    }
    removeUser(id) {
        return this.usersService.remove(id);
    }
    createProfile(profileInput) {
        console.log(profileInput);
    }
    updateProfile(updateProfileArgs) {
        console.log(updateProfileArgs);
    }
    deleteProfile(id) {
        return this.usersService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.AuthResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "register", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.AuthResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.AuthResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.SocialLoginInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "socialLogin", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.AuthResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.OtpLoginInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "otpLogin", null);
__decorate([
    (0, graphql_1.Mutation)(() => success_response_model_1.SuccessResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.VerifyOtpInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "verifyOtpCode", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.OtpResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.OtpInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "sendOtpCode", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "logout", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.PasswordChangeResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.ChangePasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "changePassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.PasswordChangeResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.ForgetPasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "forgetPassword", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.PasswordChangeResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.VerifyForgetPasswordTokenInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "verifyForgetPasswordToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => create_user_input_1.PasswordChangeResponse),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.ResetPasswordInput]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "resetPassword", null);
__decorate([
    (0, graphql_1.Query)(() => get_users_args_1.UserPaginator, { name: 'users' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_args_1.GetUsersArgs]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'me' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'user', nullable: true }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_args_1.GetUserArgs]),
    __metadata("design:returntype", user_entity_1.User)
], UsersResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "activeUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "banUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "removeUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_input_1.ProfileInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "createProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_profile_args_1.UpdateProfileArgs]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "updateProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => profile_entity_1.Profile),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "deleteProfile", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map