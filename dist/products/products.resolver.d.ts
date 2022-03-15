import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { GetProductsArgs, ProductPaginator } from './dto/get-products.args';
import { GetProductArgs } from './dto/get-product.args';
import { GetPopularProductsArgs } from './dto/get-popular-products.args';
export declare class ProductsResolver {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductInput: CreateProductInput): string;
    getProducts(getProductsArgs: GetProductsArgs): Promise<ProductPaginator>;
    getProduct(getProductArgs: GetProductArgs): Promise<Product>;
    getPopularProducts(getPopularProductsArgs: GetPopularProductsArgs): Promise<Product[]>;
    updateProduct(updateProductInput: UpdateProductInput): Product;
    deleteProduct(id: number): Product;
    related_products(product: Product, limit?: number): Promise<Product[]>;
}
