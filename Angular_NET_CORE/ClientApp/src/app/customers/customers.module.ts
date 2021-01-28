import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';



@NgModule({
  declarations: [CustomersListComponent, NewCustomerComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
