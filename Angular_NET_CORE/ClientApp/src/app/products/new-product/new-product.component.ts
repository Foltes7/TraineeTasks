import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FullProduct } from '../models/fullProduct';
import { NewProductCommand } from '../models/newProductCommand';
import { NewProduct } from '../state/products-actions';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private router: Router,
              private store: Store) { }

  ngOnInit(): void {

  }

  cancelHandler(): void
  {
    this.router.navigate(['products']);
  }

  saveFormHandler(product: FullProduct): void
  {
    const command: NewProductCommand = {
      quantity: product.quantity,
      name: product.name,
      productCategoryId: product.productCategory.id,
      productSizeId: product.productSize.id,
      price: product.price,
      description: product.description
    };
    this.store.dispatch(new NewProduct(command))
    .toPromise()
    .then(x => this.router.navigate(['products']));
  }


}
