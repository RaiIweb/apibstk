import { Attribute } from '../entities/attribute.entity';
declare const CreateAttributeInput_base: import("@nestjs/common").Type<Pick<Attribute, "name" | "shop_id">>;
export declare class CreateAttributeInput extends CreateAttributeInput_base {
    values: AttributeValueInput[];
}
export declare class AttributeValueInput {
    id: number;
    value: string;
    meta?: string;
}
export {};
