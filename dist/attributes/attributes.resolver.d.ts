import { AttributesService } from './attributes.service';
import { Attribute } from './entities/attribute.entity';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { GetAttributeArgs } from './dto/get-attribute.args';
import { GetAttributesArgs } from './dto/get-attributes.args';
export declare class AttributesResolver {
    private readonly attributesService;
    constructor(attributesService: AttributesService);
    createAttribute(createAttributeInput: CreateAttributeInput): Attribute;
    findAll(getAttributesArgs: GetAttributesArgs): Attribute[];
    findOne(getAttribute: GetAttributeArgs): Attribute;
    updateAttribute(updateAttributeInput: UpdateAttributeInput): Attribute;
    deleteAttribute(id: number): string;
}
