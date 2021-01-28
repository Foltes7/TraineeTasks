import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersRouting } from './customers-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CustomersListComponent, NewCustomerComponent],
  imports: [
    CommonModule,
    CustomersRouting,
    SharedModule
  ]
})
export class CustomersModule { }
