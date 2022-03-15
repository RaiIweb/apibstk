import { TaxesService } from './taxes.service';
import { Tax } from './entities/tax.entity';
import { CreateTaxInput } from './dto/create-tax.input';
import { UpdateTaxInput } from './dto/update-tax.input';
import { GetTaxesArgs } from './dto/get-taxes.args';
export declare class TaxesResolver {
    private readonly taxesService;
    constructor(taxesService: TaxesService);
    createTax(createTaxInput: CreateTaxInput): Tax;
    findAll(getTaxesArgs: GetTaxesArgs): Tax[];
    findOne(id: number): Tax;
    updateTax(updateTaxInput: UpdateTaxInput): Tax;
    deleteTax(id: number): string;
}
