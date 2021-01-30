import { Injectable } from '@angular/core';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { FullOrder } from '../models/fullOrder';
import { Order } from '../models/orders';
import { Status } from '../models/status';
import { OrdersApiService } from '../services/orders-api.service';
import { LoadFullOrder, LoadOrders, LoadStatuses, NewOrder } from './orders-actions';



interface OrdersState {
    orders: Order[];
    statuses: Status[];
    fullOrder: FullOrder;
}

@State<OrdersState>({
    name: 'Orders',
    defaults: {
        orders: [],
        statuses: [],
        fullOrder: null
    }
})

@Injectable()
export class OrdersStore {

    @Selector()
    static getOrders(state: OrdersState): Order[]
    {
        return state.orders;
    }

    @Selector()
    static getFullOrder(state: OrdersState): FullOrder
    {
        return state.fullOrder;
    }

    @Selector()
    static getStatuses(state: OrdersState): Status[]
    {
        return state.statuses;
    }

    constructor(private ordersService: OrdersApiService) {

    }

    @Action(LoadStatuses)
    async loadStatuses({patchState, getState}: StateContext<OrdersState>): Promise<void>
    {
        const statuses = await this.ordersService.getStatuses().toPromise();
        patchState({
            statuses
        });
    }

    @Action(LoadOrders)
    async loadOrders({patchState, getState}: StateContext<OrdersState>): Promise<void>
    {
        const orders = await this.ordersService.getAll().toPromise();
        patchState({
            orders
        });
    }

    @Action(LoadFullOrder)
    async loadFullOrder({patchState, getState}: StateContext<OrdersState>, {id}: LoadFullOrder): Promise<void>
    {
        const fullOrder = await this.ordersService.getById(id).toPromise();
        patchState({
            fullOrder
        });
    }

    @Action(NewOrder)
    async newOrder({patchState, getState}: StateContext<OrdersState>, {command}: NewOrder): Promise<void>
    {
        const order = await this.ordersService.createNew(command).toPromise();
        patchState({
            orders: [order, ...getState().orders]
        });
    }
}
