import { Product } from 'src/app/products/models/product';
import { Order } from './orders';

export interface FullOrder extends Order{
    products: Product[];
}
