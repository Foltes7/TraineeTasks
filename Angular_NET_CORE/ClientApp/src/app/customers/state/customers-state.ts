import { Injectable } from '@angular/core';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Customer } from '../models/customer';
import { FullCustomer } from '../models/full-customer';
import { CustomersApiService } from '../services/customers-api.service';
import { LoadCustomers, LoadFullCustomer, NewCustomer } from './customers-actions';


interface CustomersState {
    customers: Customer[];
    fullCustomer: FullCustomer;
}

@State<CustomersState>({
    name: 'Customers',
    defaults: {
        customers: [],
        fullCustomer: null
    }
})

@Injectable()
export class CustomersStore {

    @Selector()
    static getCustomers(state: CustomersState): Customer[]
    {
        return state.customers;
    }

    @Selector()
    static getFullCustomer(state: CustomersState): FullCustomer
    {
        return state.fullCustomer;
    }

    constructor(private customersService: CustomersApiService) {
    }

    @Action(LoadFullCustomer)
    async getFullCustomer({patchState, getState}: StateContext<CustomersState>, {id}: LoadFullCustomer): Promise<void>
    {
        const fullCustomer = await this.customersService.getFullCustomer(id).toPromise();
        patchState({
            fullCustomer
        });
    }

    @Action(LoadCustomers)
    async getCustomers({patchState, getState}: StateContext<CustomersState>): Promise<void>
    {
        const customers = await this.customersService.getAllCustomers().toPromise();
        patchState({
            customers
        });
    }

    @Action(NewCustomer)
    async newCustomer({patchState, getState}: StateContext<CustomersState>, { command}: NewCustomer): Promise<void>
    {
        const customer = await this.customersService.newCustomer(command).toPromise();
        patchState({
            customers: [customer, ...getState().customers]
        });
    }

}
