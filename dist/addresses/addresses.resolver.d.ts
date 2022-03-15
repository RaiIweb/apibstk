import { AddressesService } from './addresses.service';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
export declare class AddressesResolver {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    createAddress(createAddressInput: CreateAddressInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateAddress(updateAddressInput: UpdateAddressInput): string;
    deleteAddress(id: number): string;
}
