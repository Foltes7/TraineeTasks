import { Categories } from './categories';
import { Size } from './size';

export interface Product{
    id: number;
    name: string;
    category: Categories;
    size: Size;
    quantity: number;
    price: number;
}
