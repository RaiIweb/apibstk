import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
export declare class Mixed implements CustomScalar<any, any> {
    description: string;
    parseValue(value: number): any;
    serialize(value: any): number;
    parseLiteral(ast: ValueNode): any;
}
