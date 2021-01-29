import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmationDeleteWindowComponent } from 'src/app/shared/confirmation-delete-window/confirmation-delete-window.component';
import { Product } from '../models/product';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { ProductsStore } from '../state/products-state';
import { LoadProducts } from '../state/products-actions';
import { SmoothAppearance } from 'src/app/shared/animations/animations';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [SmoothAppearance]
})
export class ProductsListComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price', 'action'];
  loaded = false;
  products: Product[] = [];

  constructor(public dialog: MatDialog,
              private store: Store) { }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.store.select(ProductsStore.getProducts)
    .pipe(takeUntil(this.destroy))
    .subscribe(products => {
      this.products = products;
      this.loaded = true;
    });
    this.store.dispatch(LoadProducts);
  }

  delete(id: number): void
  {
    const dialogRef = this.dialog.open(ConfirmationDeleteWindowComponent, {});

    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy))
    .subscribe((result: boolean) => {
      if (result)
      {
        // this.dataSource = this.dataSource.filter(z => z.id !== id); // TODO CHANGE
      }
    });
  }

}
