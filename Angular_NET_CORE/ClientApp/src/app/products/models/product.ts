import { Category } from './category';
import { Size } from './size';

export interface Product{
    id: number;
    name: string;
    category: Category;
    size: Size;
    quantity: number;
    price: number;
}
