import { ShopsService } from './shops.service';
import { Shop } from './entities/shop.entity';
import { ApproveShopInput, CreateShopInput } from './dto/create-shop.input';
import { UpdateShopInput } from './dto/update-shop.input';
import { GetShopsArgs, ShopPaginator } from './dto/get-shops.args';
import { GetShopArgs } from './dto/get-shop.args';
import { AddStaffInput } from './dto/add-staff.input';
import { UserPaginator } from 'src/users/dto/get-users.args';
import { GetStaffsArgs } from './dto/get-staffs.args';
export declare class ShopsResolver {
    private readonly shopsService;
    constructor(shopsService: ShopsService);
    createShop(createShopInput: CreateShopInput): Shop;
    getShops(getShopsArgs: GetShopsArgs): Promise<ShopPaginator>;
    getShop(getShopArgs: GetShopArgs): Promise<Shop>;
    updateShop(updateShopInput: UpdateShopInput): Shop;
    deleteShop(id: number): string;
    disapproveShop(id: number): string;
    approveShop(approveShopInput: ApproveShopInput): void;
    getStaffs(getStaffsArgs: GetStaffsArgs): Promise<UserPaginator>;
    addStaff(addStaffInput: AddStaffInput): boolean;
    removeStaff(id: number): string;
}
