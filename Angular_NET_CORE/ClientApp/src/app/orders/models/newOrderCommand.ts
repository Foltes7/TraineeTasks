export interface NewOrderCommand{
    customerId: number;
    orderStatusId: number;
    description: string;
    productIds: number[];
}
