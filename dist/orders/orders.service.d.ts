import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { CheckoutVerificationInput, VerifiedCheckoutData } from './dto/verify-checkout.input';
import { Order } from './entities/order.entity';
import { GetOrdersArgs, OrderPaginator } from './dto/get-orders.args';
import { GetOrderArgs } from './dto/get-order.args';
import { GetOrderStatusesArgs, OrderStatusPaginator } from './dto/get-order-statuses.args';
import { OrderStatus } from './entities/order-status.entity';
import { CreateOrderStatusInput, UpdateOrderStatusInput } from './dto/create-order-status.input';
export declare class OrdersService {
    private orders;
    private orderStatus;
    create(createOrderInput: CreateOrderInput): Order;
    getOrders({ first, page, customer_id, tracking_number, shop_id, }: GetOrdersArgs): OrderPaginator;
    getOrder({ id, tracking_number }: GetOrderArgs): Order;
    getOrderStatuses({ first, page, text, orderBy, }: GetOrderStatusesArgs): OrderStatusPaginator;
    getOrderStatus(id: number): OrderStatus;
    update(id: number, updateOrderInput: UpdateOrderInput): Order;
    remove(id: number): string;
    verifyCheckout(input: CheckoutVerificationInput): VerifiedCheckoutData;
    createOrderStatus(createOrderStatusInput: CreateOrderStatusInput): OrderStatus;
    updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusInput): OrderStatus;
}
