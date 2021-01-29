import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';
import { Order } from '../models/orders';
import { OrdersApiService } from '../services/orders-api.service';



interface OrdersState {
    orders: Order[];
}

@State<OrdersState>({
    name: 'Orders',
    defaults: {
        orders: [],
    }
})

@Injectable()
export class OrdersStore {

    @Selector()
    static getOrders(state: OrdersState): Order[]
    {
        return state.orders;
    }

    constructor(private ordersService: OrdersApiService) {

    }
}
