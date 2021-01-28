import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';


const routes: Routes = [
  { path: '', component: CustomersListComponent},
  { path: 'new', component: NewCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRouting {
}



