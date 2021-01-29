import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SmoothAppearance } from 'src/app/shared/animations/animations';
import { FullProduct } from '../models/fullProduct';
import { Product } from '../models/product';
import { UpdateProductCommand } from '../models/updateProductCommand';
import { LoadFullProduct, UpdateProduct } from '../state/products-actions';
import { ProductsStore } from '../state/products-state';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss'],
  animations: [SmoothAppearance]
})
export class ProductViewDetailsComponent implements OnInit, OnDestroy {

  loaded = false;

  destroy = new Subject<void>();

  fullProduct: FullProduct;

  private routeSubscription: Subscription;
  private id: number;

  editable = false;

  constructor(private route: ActivatedRoute,
              private store: Store,
              private router: Router, ) {
    this.routeSubscription = route.params.subscribe(async (params) => {
      this.id = params.id;
      this.store.dispatch(new LoadFullProduct(this.id));
      this.store.select(ProductsStore.getFullProduct)
        .pipe(takeUntil(this.destroy))
        .subscribe(x => {
          this.fullProduct = x;
          this.loaded = true;
        });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
  }

  setEditableTrue(): void {
    this.editable = true;
  }

  cancelHandler(): void {
    this.editable = false;
  }

  saveFormHandler(product: FullProduct): void {
    const obj: UpdateProductCommand = {
      id: product.id,
      description: product.description,
      productCategoryId: product.productCategory.id,
      productSizeId: product.productSize.id,
      name: product.name,
      quantity: product.quantity,
      price: product.price
    };
    this.store.dispatch(new UpdateProduct(obj)).toPromise()
    .then(x => this.router.navigate(['products']));
  }


}
