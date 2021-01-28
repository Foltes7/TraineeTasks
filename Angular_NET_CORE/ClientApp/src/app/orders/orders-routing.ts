import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderViewDetailsComponent } from './order-view-details/order-view-details.component';
import { ProductToOrderComponent } from './product-to-order/product-to-order.component';


const routes: Routes = [
  { path: '', component: OrdersListComponent},
  { path: 'new', component: NewOrderComponent},
  { path: ':id', component: OrderViewDetailsComponent},
  { path: ':id/products', component: ProductToOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRouting {
}



