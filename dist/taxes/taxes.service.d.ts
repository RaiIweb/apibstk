import { CreateTaxInput } from './dto/create-tax.input';
import { GetTaxesArgs } from './dto/get-taxes.args';
import { UpdateTaxInput } from './dto/update-tax.input';
import { Tax } from './entities/tax.entity';
export declare class TaxesService {
    private taxes;
    create(createTaxInput: CreateTaxInput): Tax;
    findAll(getTaxesArgs: GetTaxesArgs): Tax[];
    findOne(id: number): Tax;
    update(id: number, updateTaxInput: UpdateTaxInput): Tax;
    remove(id: number): string;
}
