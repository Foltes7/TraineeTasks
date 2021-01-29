import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Category } from '../models/category';
import { FullProduct } from '../models/fullProduct';
import { Product } from '../models/product';
import { Size } from '../models/size';
import { ProductsApiService } from '../services/products-api.service';
import { LoadCategories, LoadFullProduct, LoadProducts, LoadSizes, NewProduct } from './products-actions';

interface ProductsState {
    products: Product[];
    fullProduct: FullProduct;
    sizes: Size[];
    categories: Category[];
}

@State<ProductsState>({
    name: 'Products',
    defaults: {
        products: [],
        fullProduct: null,
        sizes: [],
        categories: []
    }
})

@Injectable()
export class ProductsStore {

    @Selector()
    static getSizes(state: ProductsState): Size[]
    {
        return state.sizes;
    }

    @Selector()
    static getCategories(state: ProductsState): Category[]
    {
        return state.categories;
    }

    @Selector()
    static getProducts(state: ProductsState): Product[]
    {
        return state.products;
    }

    @Selector()
    static getFullProduct(state: ProductsState): FullProduct
    {
        return state.fullProduct;
    }

    constructor(private productsService: ProductsApiService) {

    }

    @Action(LoadSizes)
    async loadSizes({patchState, getState}: StateContext<ProductsState>): Promise<void>
    {
        const sizes = await this.productsService.getSizes().toPromise();
        patchState({
            sizes
        });
    }

    @Action(LoadCategories)
    async loadCategories({patchState, getState}: StateContext<ProductsState>): Promise<void>
    {
        const categories = await this.productsService.getCategories().toPromise();
        patchState({
            categories
        });
    }


    @Action(LoadProducts)
    async loadProducts({patchState, getState}: StateContext<ProductsState>): Promise<void>
    {
        const products = await this.productsService.getAll().toPromise();
        patchState({
            products
        });
    }

    @Action(LoadFullProduct)
    async loadFullProduct({patchState, getState}: StateContext<ProductsState>, {id}: LoadFullProduct): Promise<void>
    {
        const fullProduct = await this.productsService.getById(id).toPromise();
        patchState({
            fullProduct
        });
    }

    @Action(NewProduct)
    async newProduct({patchState, getState}: StateContext<ProductsState>, {command}: NewProduct): Promise<void>
    {
        const newProduct = await this.productsService.createNew(command).toPromise();
        patchState({
            products: [newProduct, ...getState().products]
        });
    }
}
