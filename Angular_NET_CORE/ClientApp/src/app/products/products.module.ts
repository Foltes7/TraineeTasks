import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';



@NgModule({
  declarations: [ProductsListComponent, NewProductComponent, ProductViewDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
