import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
export declare class AddressesService {
    create(createAddressInput: CreateAddressInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAddressInput: UpdateAddressInput): string;
    remove(id: number): string;
}
