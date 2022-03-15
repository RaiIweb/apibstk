import { CreateShippingInput } from './dto/create-shipping.input';
import { GetShippingsArgs } from './dto/get-shippings.args';
import { UpdateShippingInput } from './dto/update-shipping.input';
import { Shipping } from './entities/shipping.entity';
export declare class ShippingsService {
    private shippings;
    create(createShippingInput: CreateShippingInput): Shipping;
    findAll(getShippingsArgs: GetShippingsArgs): Shipping[];
    findOne(id: number): Shipping;
    update(updateShippingInput: UpdateShippingInput): Shipping;
    remove(id: number): string;
}
