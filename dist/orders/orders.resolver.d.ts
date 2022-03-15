import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { GetOrdersArgs, OrderPaginator } from './dto/get-orders.args';
import { CheckoutVerificationInput, VerifiedCheckoutData } from './dto/verify-checkout.input';
import { OrderStatus } from './entities/order-status.entity';
import { GetOrderStatusesArgs, OrderStatusPaginator } from './dto/get-order-statuses.args';
import { GetOrderArgs } from './dto/get-order.args';
import { CreateOrderStatusInput, UpdateOrderStatusInput } from './dto/create-order-status.input';
export declare class OrdersResolver {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(createOrderInput: CreateOrderInput): Order;
    getOrders(ordersArgs: GetOrdersArgs): OrderPaginator;
    getOrderStatuses(orderStatusesArgs: GetOrderStatusesArgs): OrderStatusPaginator;
    findOne(orderArgs: GetOrderArgs): Order;
    getOrderStatus(id: number): OrderStatus;
    updateOrder(updateOrderInput: UpdateOrderInput): Order;
    deleteOrder(id: number): string;
    verifyCheckout(checkoutVerificationInput: CheckoutVerificationInput): VerifiedCheckoutData;
    createOrderStatus(createOrderStatusInput: CreateOrderStatusInput): OrderStatus;
    updateOrderStatus(updateOrderStatusInput: UpdateOrderStatusInput): OrderStatus;
    deleteOrderStatus(id: number): string;
}
