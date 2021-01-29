import { Product } from './product';

export interface FullProduct extends Product {
    createdAt: Date;
}
