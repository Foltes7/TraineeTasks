import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomersApiService } from '../customers/services/customers-api.service';
import { OrdersApiService } from '../orders/services/orders-api.service';
import { ProductsApiService } from '../products/services/products-api.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CustomersApiService, OrdersApiService, ProductsApiService]
})
export class CoreModule { }
