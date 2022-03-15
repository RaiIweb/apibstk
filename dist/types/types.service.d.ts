import { CreateTypeInput } from './dto/create-type.input';
import { UpdateTypeInput } from './dto/update-type.input';
import { Type } from './entities/type.entity';
import { GetTypesArgs } from './dto/get-types.args';
import { GetTypeArgs } from './dto/get-type.args';
export declare class TypesService {
    private types;
    create(createTypeInput: CreateTypeInput): Type;
    getTypes({ text }: GetTypesArgs): Type[];
    getType({ id, slug }: GetTypeArgs): Type;
    findOne(id: number): string;
    update(id: number, updateTypeInput: UpdateTypeInput): Type;
    remove(id: number): string;
}
