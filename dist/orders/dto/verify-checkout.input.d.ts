import { ConnectProductOrderPivot, UserAddressInput } from './create-order.input';
export declare class CheckoutVerificationInput {
    amount: number;
    products: ConnectProductOrderPivot[];
    billing_address?: UserAddressInput;
    shipping_address?: UserAddressInput;
}
export declare class VerifiedCheckoutData {
    total_tax: number;
    shipping_charge: number;
    unavailable_products: number[];
    wallet_amount: number;
    wallet_currency: number;
}
