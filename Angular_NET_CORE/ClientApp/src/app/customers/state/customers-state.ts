import { Injectable } from '@angular/core';
import { State, Selector } from '@ngxs/store';
import { Customer } from '../models/customer';
import { CustomersApiService } from '../services/customers-api.service';


interface CustomersState {
    customers: Customer[];
}

@State<CustomersState>({
    name: 'Customers',
    defaults: {
        customers: [],
    }
})

@Injectable()
export class CustomersStore {

    @Selector()
    static getCustomers(state: CustomersState): Customer[]
    {
        return state.customers;
    }

    constructor(private customersService: CustomersApiService) {

    }
}
