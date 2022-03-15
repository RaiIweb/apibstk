import { Profile } from '../entities/profile.entity';
declare const ProfileInput_base: import("@nestjs/common").Type<Pick<Profile, "avatar" | "bio" | "socials" | "contact">>;
export declare class ProfileInput extends ProfileInput_base {
    customer: ConnectBelongsTo;
}
export declare class ConnectBelongsTo {
    connect: number;
}
export {};
