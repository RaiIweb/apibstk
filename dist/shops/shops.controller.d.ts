import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { GetShopsDto, ShopPaginator } from './dto/get-shops.dto';
import { GetStaffsDto } from './dto/get-staffs.dto';
import { UserPaginator } from 'src/users/dto/get-users.dto';
export declare class ShopsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    create(createShopDto: CreateShopDto): import("./entities/shop.entity").Shop;
    getShops(query: GetShopsDto): Promise<ShopPaginator>;
    getShop(slug: string): Promise<import("./entities/shop.entity").Shop>;
    update(id: string, updateShopDto: UpdateShopDto): import("./entities/shop.entity").Shop;
    remove(id: string): string;
    approveShop(id: string): string;
    disapproveShop(id: string): string;
}
export declare class StaffsController {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    create(createShopDto: CreateShopDto): import("./entities/shop.entity").Shop;
    getStaffs(query: GetStaffsDto): Promise<UserPaginator>;
    getShop(slug: string): Promise<import("./entities/shop.entity").Shop>;
    update(id: string, updateShopDto: UpdateShopDto): import("./entities/shop.entity").Shop;
    remove(id: string): string;
}
