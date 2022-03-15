import { Tax } from '../entities/tax.entity';
declare const CreateTaxInput_base: import("@nestjs/common").Type<Omit<Tax, "id" | "created_at" | "updated_at">>;
export declare class CreateTaxInput extends CreateTaxInput_base {
}
export {};
