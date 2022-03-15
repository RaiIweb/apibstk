"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpLoginInput = exports.OtpInput = exports.OtpResponse = exports.VerifyOtpInput = exports.PasswordChangeResponse = exports.AuthResponse = exports.ResetPasswordInput = exports.VerifyForgetPasswordTokenInput = exports.ForgetPasswordInput = exports.ChangePasswordInput = exports.SocialLoginInput = exports.LoginInput = exports.RegisterInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../entities/user.entity");
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "Super admin";
    Permission["STORE_OWNER"] = "Store owner";
    Permission["STAFF"] = "Staff";
    Permission["CUSTOMER"] = "Customer";
})(Permission || (Permission = {}));
(0, graphql_1.registerEnumType)(Permission, { name: 'Permission' });
let RegisterInput = class RegisterInput extends (0, graphql_1.PickType)(user_entity_1.User, [
    'name',
    'email',
    'password',
]) {
    constructor() {
        super(...arguments);
        this.permission = Permission.CUSTOMER;
    }
    static _GRAPHQL_METADATA_FACTORY() {
        return { permission: { type: () => Permission } };
    }
};
RegisterInput = __decorate([
    (0, graphql_1.InputType)()
], RegisterInput);
exports.RegisterInput = RegisterInput;
let LoginInput = class LoginInput extends (0, graphql_1.PartialType)((0, graphql_1.PickType)(user_entity_1.User, ['email', 'password'])) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
LoginInput = __decorate([
    (0, graphql_1.InputType)()
], LoginInput);
exports.LoginInput = LoginInput;
let SocialLoginInput = class SocialLoginInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { provider: { type: () => String }, access_token: { type: () => String } };
    }
};
SocialLoginInput = __decorate([
    (0, graphql_1.InputType)()
], SocialLoginInput);
exports.SocialLoginInput = SocialLoginInput;
let ChangePasswordInput = class ChangePasswordInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { oldPassword: { type: () => String }, newPassword: { type: () => String } };
    }
};
ChangePasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ChangePasswordInput);
exports.ChangePasswordInput = ChangePasswordInput;
let ForgetPasswordInput = class ForgetPasswordInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { email: { type: () => String } };
    }
};
ForgetPasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ForgetPasswordInput);
exports.ForgetPasswordInput = ForgetPasswordInput;
let VerifyForgetPasswordTokenInput = class VerifyForgetPasswordTokenInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { email: { type: () => String }, token: { type: () => String } };
    }
};
VerifyForgetPasswordTokenInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyForgetPasswordTokenInput);
exports.VerifyForgetPasswordTokenInput = VerifyForgetPasswordTokenInput;
let ResetPasswordInput = class ResetPasswordInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { email: { type: () => String }, token: { type: () => String }, password: { type: () => String } };
    }
};
ResetPasswordInput = __decorate([
    (0, graphql_1.InputType)()
], ResetPasswordInput);
exports.ResetPasswordInput = ResetPasswordInput;
let AuthResponse = class AuthResponse {
    static _GRAPHQL_METADATA_FACTORY() {
        return { token: { type: () => String }, permissions: { type: () => [String] } };
    }
};
AuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AuthResponse);
exports.AuthResponse = AuthResponse;
let PasswordChangeResponse = class PasswordChangeResponse {
    static _GRAPHQL_METADATA_FACTORY() {
        return { success: { type: () => Boolean }, message: { type: () => String } };
    }
};
PasswordChangeResponse = __decorate([
    (0, graphql_1.ObjectType)()
], PasswordChangeResponse);
exports.PasswordChangeResponse = PasswordChangeResponse;
let VerifyOtpInput = class VerifyOtpInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { otp_id: { type: () => String }, code: { type: () => String }, phone_number: { type: () => String } };
    }
};
VerifyOtpInput = __decorate([
    (0, graphql_1.InputType)()
], VerifyOtpInput);
exports.VerifyOtpInput = VerifyOtpInput;
let OtpResponse = class OtpResponse {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String }, message: { type: () => String }, success: { type: () => Boolean }, phone_number: { type: () => String }, provider: { type: () => String }, is_contact_exist: { type: () => Boolean } };
    }
};
OtpResponse = __decorate([
    (0, graphql_1.ObjectType)()
], OtpResponse);
exports.OtpResponse = OtpResponse;
let OtpInput = class OtpInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { phone_number: { type: () => String } };
    }
};
OtpInput = __decorate([
    (0, graphql_1.InputType)()
], OtpInput);
exports.OtpInput = OtpInput;
let OtpLoginInput = class OtpLoginInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { otp_id: { type: () => String }, code: { type: () => String }, phone_number: { type: () => String }, name: { nullable: true, type: () => String }, email: { nullable: true, type: () => String } };
    }
};
OtpLoginInput = __decorate([
    (0, graphql_1.InputType)()
], OtpLoginInput);
exports.OtpLoginInput = OtpLoginInput;
//# sourceMappingURL=create-user.input.js.map