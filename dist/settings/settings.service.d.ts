import { SettingsInput } from './dto/update-setting.input';
import { Setting } from './entities/setting.entity';
export declare class SettingsService {
    private settings;
    getSettings(): Setting;
    findOne(id: number): string;
    updateSettings(updateSettingsInput: SettingsInput): Setting;
    remove(id: number): string;
}
