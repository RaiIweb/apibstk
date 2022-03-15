import { Product, VariationInput } from '../entities/product.entity';
declare class UpsertVariationsHasMany {
    upsert?: VariationInput[];
    delete?: number[];
}
declare const CreateProductInput_base: import("@nestjs/common").Type<Omit<Product, "type" | "tags" | "id" | "created_at" | "updated_at" | "shop" | "orders" | "slug" | "pivot" | "categories" | "related_products" | "variation_options">>;
export declare class CreateProductInput extends CreateProductInput_base {
    categories?: string[];
    tags?: number[];
    variation_options?: UpsertVariationsHasMany;
}
export {};
