import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmationDeleteWindowComponent } from 'src/app/shared/confirmation-delete-window/confirmation-delete-window.component';
import { Categories } from '../models/categories';
import { Product } from '../models/product';
import { Size } from '../models/size';
import { takeUntil } from 'rxjs/operators';

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 1.0079, quantity: 2, size: Size.Small, category: Categories.Food, createdAt: new Date()  },
  {id: 2, name: 'Helium', price: 4.0026, quantity: 23, size: Size.Large, category: Categories.Food , createdAt: new Date() },
  {id: 3, name: 'Lithium', price: 6.941, quantity: 12, size: Size.Large, category: Categories.Food, createdAt: new Date() },
  {id: 4, name: 'Beryllium', price: 9.0122, quantity: 5, size: Size.Small, category: Categories.Food, createdAt: new Date()  },
  {id: 5, name: 'Boron', price: 10.811, quantity: 8, size: Size.Medium, category: Categories.Food , createdAt: new Date() },
  {id: 6, name: 'Carbon', price: 12.0107, quantity: 1, size: Size.Small, category: Categories.Food , createdAt: new Date()},
  {id: 7, name: 'Nitrogen', price: 14.0067, quantity: 5, size: Size.Small, category: Categories.Food, createdAt: new Date()  },
  {id: 8, name: 'Oxygen', price: 15.9994, quantity: 122, size: Size.Medium, category: Categories.Food , createdAt: new Date() },
  {id: 9, name: 'Fluorine', price: 18.9984, quantity: 234, size: Size.Medium, category: Categories.Food, createdAt: new Date() },
  {id: 10, name: 'Neon', price: 20.1797, quantity: 22, size: Size.Medium, category: Categories.Food, createdAt: new Date() },
];

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
  }

  delete(id: number)
  {
    const dialogRef = this.dialog.open(ConfirmationDeleteWindowComponent, {});

    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy))
    .subscribe((result: boolean) => {
      if (result)
      {
        this.dataSource = this.dataSource.filter(z => z.id !== id);
      }
    });
  }

}
