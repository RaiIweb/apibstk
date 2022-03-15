import { SettingsOptions } from '../entities/setting.entity';
export declare class SettingsInput {
    options: SettingsOptionsInput;
}
declare const SettingsOptionsInput_base: import("@nestjs/common").Type<Partial<SettingsOptions>>;
export declare class SettingsOptionsInput extends SettingsOptionsInput_base {
}
export {};
