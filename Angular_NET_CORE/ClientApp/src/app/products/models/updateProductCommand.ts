export interface UpdateProductCommand{
    id: number;
    name: string;
    productCategoryId: number;
    productSizeId: number;
    quantity: number;
    price: number;
    description: string;
}
