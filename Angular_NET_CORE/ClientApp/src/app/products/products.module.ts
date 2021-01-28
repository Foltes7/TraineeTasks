import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { ProductsRouting } from './products-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductsListComponent, NewProductComponent, ProductViewDetailsComponent],
  imports: [
    CommonModule,
    ProductsRouting,
    SharedModule
  ]
})
export class ProductsModule { }
