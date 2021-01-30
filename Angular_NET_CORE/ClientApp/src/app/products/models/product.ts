import { Category } from './category';
import { Size } from './size';

export interface Product{
    id: number;
    name: string;
    productCategory: Category;
    productSize: Size;
    quantity: number;
    price: number;
}

export interface ProductSelect extends Product{
    isSelected: boolean;
}
