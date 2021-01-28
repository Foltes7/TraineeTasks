import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ProductToOrderComponent } from './product-to-order/product-to-order.component';
import { OrderViewDetailsComponent } from './order-view-details/order-view-details.component';
import { OrdersRouting } from './orders-routing';



@NgModule({
  declarations: [OrdersListComponent, NewOrderComponent, ProductToOrderComponent, OrderViewDetailsComponent],
  imports: [
    CommonModule,
    OrdersRouting
  ]
})
export class OrdersModule { }
