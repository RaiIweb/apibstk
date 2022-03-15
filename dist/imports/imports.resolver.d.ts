import { ImportsService } from './imports.service';
import { GraphQLUpload } from 'graphql-upload';
export declare class ImportsResolver {
    private readonly importsService;
    constructor(importsService: ImportsService);
    importAttributes(shop_id: number, csv: GraphQLUpload): boolean;
    importProducts(shop_id: number, csv: GraphQLUpload): boolean;
    importVariationOptions(shop_id: number, csv: GraphQLUpload): boolean;
}
