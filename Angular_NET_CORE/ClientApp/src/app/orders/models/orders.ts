import { OrderCustomer } from './orderCustomer';
import { Status } from './status';

export interface Order{
    id: number;
    customer: OrderCustomer;
    cost: number;
    orderStatus: Status;
}
