import { User } from '../entities/user.entity';
declare enum Permission {
    SUPER_ADMIN = "Super admin",
    STORE_OWNER = "Store owner",
    STAFF = "Staff",
    CUSTOMER = "Customer"
}
declare const RegisterInput_base: import("@nestjs/common").Type<Pick<User, "name" | "email" | "password">>;
export declare class RegisterInput extends RegisterInput_base {
    permission: Permission;
}
declare const LoginInput_base: import("@nestjs/common").Type<Partial<Pick<User, keyof User>>>;
export declare class LoginInput extends LoginInput_base {
}
export declare class SocialLoginInput {
    provider: string;
    access_token: string;
}
export declare class ChangePasswordInput {
    oldPassword: string;
    newPassword: string;
}
export declare class ForgetPasswordInput {
    email: string;
}
export declare class VerifyForgetPasswordTokenInput {
    email: string;
    token: string;
}
export declare class ResetPasswordInput {
    email: string;
    token: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    permissions: string[];
}
export declare class PasswordChangeResponse {
    success: boolean;
    message: string;
}
export declare class VerifyOtpInput {
    otp_id: string;
    code: string;
    phone_number: string;
}
export declare class OtpResponse {
    id: string;
    message: string;
    success: boolean;
    phone_number: string;
    provider: string;
    is_contact_exist: boolean;
}
export declare class OtpInput {
    phone_number: string;
}
export declare class OtpLoginInput {
    otp_id: string;
    code: string;
    phone_number: string;
    name?: string;
    email?: string;
}
export {};
