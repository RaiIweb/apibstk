import { TypesService } from './types.service';
import { Type } from './entities/type.entity';
import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { GetTypeArgs } from './dto/get-type.args';
import { GetTypesArgs } from './dto/get-types.args';
export declare class TypesResolver {
    private readonly typesService;
    constructor(typesService: TypesService);
    createType(createTypeInput: CreateTypeInput): Type;
    getTypes(getTypesArgs: GetTypesArgs): Promise<Type[]>;
    getType(getTypeArgs: GetTypeArgs): Promise<Type>;
    updateType(updateTypeInput: UpdateTypeInput): Type;
    deleteType(id: number): string;
}
