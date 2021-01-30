export interface UpdateOrderCommand{
    id: number;
    customerId: number;
    orderStatusId: number;
    description: string;
    productIds: number[];
}
