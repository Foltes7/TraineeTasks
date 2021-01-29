export interface NewProductCommand{
    name: string;
    productCategoryId: number;
    productSizeId: number;
    quantity: number;
    price: number;
    description: string;
}
