import { ShippingsService } from './shippings.service';
import { Shipping } from './entities/shipping.entity';
import { CreateShippingInput } from './dto/create-shipping.input';
import { UpdateShippingInput } from './dto/update-shipping.input';
import { GetShippingsArgs } from './dto/get-shippings.args';
export declare class ShippingsResolver {
    private readonly shippingsService;
    constructor(shippingsService: ShippingsService);
    createShipping(createShippingInput: CreateShippingInput): Shipping;
    findAll(getShippingsArgs: GetShippingsArgs): Shipping[];
    findOne(id: number): Shipping;
    updateShipping(updateShippingInput: UpdateShippingInput): Shipping;
    deleteShipping(id: number): string;
}
