import { Address } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Refund } from 'src/refunds/entities/refund.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Wallet } from 'src/wallets/entities/wallet.entity';
import { Profile } from './profile.entity';
export declare class User extends CoreEntity {
    name: string;
    email: string;
    password?: string;
    shop_id?: number;
    profile?: Profile;
    shops?: Shop[];
    refunds?: Refund[];
    managed_shop?: Shop;
    is_active?: boolean;
    address?: Address[];
    orders?: Order[];
    wallet?: Wallet;
}
