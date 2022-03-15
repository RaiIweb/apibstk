import { OrderStatus } from '../entities/order-status.entity';
declare const CreateOrderStatusInput_base: import("@nestjs/common").Type<Pick<OrderStatus, "name" | "serial" | "color">>;
export declare class CreateOrderStatusInput extends CreateOrderStatusInput_base {
}
declare const UpdateOrderStatusInput_base: import("@nestjs/common").Type<Partial<CreateOrderStatusInput>>;
export declare class UpdateOrderStatusInput extends UpdateOrderStatusInput_base {
    id: number;
}
export {};
