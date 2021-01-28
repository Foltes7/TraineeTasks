import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersRouting } from './customers-routing';



@NgModule({
  declarations: [CustomersListComponent, NewCustomerComponent],
  imports: [
    CommonModule,
    CustomersRouting
  ]
})
export class CustomersModule { }
