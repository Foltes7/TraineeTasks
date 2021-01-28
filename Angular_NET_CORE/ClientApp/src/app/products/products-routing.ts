import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';



const routes: Routes = [
  { path: '', component: ProductsListComponent},
  { path: 'new', component: NewProductComponent},
  { path: ':id', component: ProductViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRouting {
}



