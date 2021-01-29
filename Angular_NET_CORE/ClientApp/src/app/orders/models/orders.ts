import { Status } from './statuses';

export interface Order{
    id: number;
    createdAt: Date;
    customerName: string;
    customerAddress: string;
    cost: number;
    status: Status;
}
