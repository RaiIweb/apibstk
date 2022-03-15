import { SettingsService } from './settings.service';
import { Setting } from './entities/setting.entity';
import { ContactInput } from './dto/create-setting.input';
import { SettingsInput } from './dto/update-setting.input';
export declare class SettingsResolver {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    findAll(): Setting;
    updateSettings(updateSettingInput: SettingsInput): Setting;
    contactUs(contactInput?: ContactInput): {
        message: string;
        success: boolean;
    };
}
