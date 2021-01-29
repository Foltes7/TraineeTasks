import { Product } from 'src/app/products/models/product';

export interface FullOrder{
    id: number;
    createdAt: Date;
    customerId: number;
    cost: number;
    description: string;
    orderStatusId: number;
    products: Product[];
}
