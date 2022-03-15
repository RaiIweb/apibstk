import { CoreMutationOutput } from 'src/common/dto/core-mutation-output.model';
import { Setting } from '../entities/setting.entity';
declare const CreateSettingsInput_base: import("@nestjs/common").Type<Omit<Setting, "created_at" | "updated_at">>;
export declare class CreateSettingsInput extends CreateSettingsInput_base {
}
export declare class ContactInput {
    subject: string;
    email: string;
    name: string;
    description: string;
}
export declare class ContactResponse extends CoreMutationOutput {
}
export {};
