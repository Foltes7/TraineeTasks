import { Status } from './statuses';

export interface Order{
    id: number;
    customerName: string;
    customerAddress: string;
    cost: number;
    status: Status;
}
