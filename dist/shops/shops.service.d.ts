import { CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { Shop } from './entities/shop.entity';
import { GetShopsArgs } from './dto/get-shops.args';
import { GetShopArgs } from './dto/get-shop.args';
import { GetStaffsArgs } from './dto/get-staffs.args';
export declare class ShopsService {
    private shops;
    create(createShopInput: CreateShopInput): Shop;
    getShops({ text, first, page }: GetShopsArgs): {
        data: Shop[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    getStaffs({ shop_id, first, page }: GetStaffsArgs): {
        data: import("../users/entities/user.entity").User[];
        paginatorInfo: import("../common/dto/paginator-info.model").PaginatorInfo;
    };
    getShop({ id, slug }: GetShopArgs): Shop;
    update(id: number, updateShopInput: UpdateShopInput): Shop;
    remove(id: number): string;
}
