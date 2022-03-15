import { AuthResponse, ChangePasswordInput, ForgetPasswordInput, LoginInput, PasswordChangeResponse, RegisterInput, ResetPasswordInput, VerifyForgetPasswordTokenInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { GetUserArgs } from './dto/get-user.args';
import { GetUsersArgs, UserPaginator } from './dto/get-users.args';
export declare class UsersService {
    private users;
    register(createUserInput: RegisterInput): Promise<AuthResponse>;
    login(loginInput: LoginInput): Promise<AuthResponse>;
    changePassword(changePasswordInput: ChangePasswordInput): Promise<PasswordChangeResponse>;
    forgetPassword(forgetPasswordInput: ForgetPasswordInput): Promise<PasswordChangeResponse>;
    verifyForgetPasswordToken(verifyForgetPasswordTokenInput: VerifyForgetPasswordTokenInput): Promise<PasswordChangeResponse>;
    resetPassword(resetPasswordInput: ResetPasswordInput): Promise<PasswordChangeResponse>;
    getUsers({ text, first, page }: GetUsersArgs): Promise<UserPaginator>;
    getUser(getUserArgs: GetUserArgs): User;
    me(): User;
    updateUser(id: number, updateUserInput: UpdateUserInput): User;
    remove(id: number): string;
}
