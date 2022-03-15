import { CreateProductInput } from './dto/create-product.input';
import { GetProductArgs } from './dto/get-product.args';
import { GetProductsArgs, ProductPaginator } from './dto/get-products.args';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { GetPopularProductsArgs } from './dto/get-popular-products.args';
export declare class ProductsService {
    private products;
    create(createProductInput: CreateProductInput): string;
    getProducts({ text, first, page, hasType, hasCategories, status, shop_id, }: GetProductsArgs): ProductPaginator;
    getProduct({ id, slug }: GetProductArgs): Product;
    getRelatedProducts({ id, slug }: GetProductArgs): Product[];
    getPopularProducts({ shop_id, limit }: GetPopularProductsArgs): Product[];
    update(id: number, updateProductInput: UpdateProductInput): Product;
    remove(id: number): Product;
}
