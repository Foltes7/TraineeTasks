import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { Product } from '../models/product';
import { ProductsApiService } from '../services/products-api.service';

interface ProductsState {
    products: Product[];
}

@State<ProductsState>({
    name: 'Products',
    defaults: {
        products: [],
    }
})

@Injectable()
export class ProductsStore {

    @Selector()
    static getProducts(state: ProductsState): Product[]
    {
        return state.products;
    }

    constructor(private productsService: ProductsApiService) {

    }
}
