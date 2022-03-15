import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { Attribute } from './entities/attribute.entity';
import { GetAttributeArgs } from './dto/get-attribute.args';
export declare class AttributesService {
    private attributes;
    create(createAttributeInput: CreateAttributeInput): Attribute;
    findAll(): Attribute[];
    findOne({ id, slug }: GetAttributeArgs): Attribute;
    update(id: number, updateAttributeInput: UpdateAttributeInput): Attribute;
    remove(id: number): string;
}
