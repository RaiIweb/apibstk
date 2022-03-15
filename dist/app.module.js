"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const orders_module_1 = require("./orders/orders.module");
const settings_module_1 = require("./settings/settings.module");
const coupons_module_1 = require("./coupons/coupons.module");
const categories_module_1 = require("./categories/categories.module");
const attributes_module_1 = require("./attributes/attributes.module");
const addresses_module_1 = require("./addresses/addresses.module");
const shops_module_1 = require("./shops/shops.module");
const types_module_1 = require("./types/types.module");
const tags_module_1 = require("./tags/tags.module");
const uploads_module_1 = require("./uploads/uploads.module");
const withdraws_module_1 = require("./withdraws/withdraws.module");
const taxes_module_1 = require("./taxes/taxes.module");
const shippings_module_1 = require("./shippings/shippings.module");
const analytics_module_1 = require("./analytics/analytics.module");
const imports_module_1 = require("./imports/imports.module");
const wallets_module_1 = require("./wallets/wallets.module");
const refunds_module_1 = require("./refunds/refunds.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            settings_module_1.SettingsModule,
            coupons_module_1.CouponsModule,
            categories_module_1.CategoriesModule,
            attributes_module_1.AttributesModule,
            addresses_module_1.AddressesModule,
            shops_module_1.ShopsModule,
            types_module_1.TypesModule,
            tags_module_1.TagsModule,
            uploads_module_1.UploadsModule,
            withdraws_module_1.WithdrawsModule,
            taxes_module_1.TaxesModule,
            shippings_module_1.ShippingsModule,
            analytics_module_1.AnalyticsModule,
            imports_module_1.ImportsModule,
            wallets_module_1.WalletsModule,
            refunds_module_1.RefundsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map