import { Shipping } from '../entities/shipping.entity';
declare const CreateShippingInput_base: import("@nestjs/common").Type<Pick<Shipping, "type" | "name" | "amount" | "is_global">>;
export declare class CreateShippingInput extends CreateShippingInput_base {
}
export {};
