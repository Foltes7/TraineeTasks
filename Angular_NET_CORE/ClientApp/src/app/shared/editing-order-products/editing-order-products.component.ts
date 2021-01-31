import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Product, ProductSelect } from 'src/app/products/models/product';
import { ProductsApiService } from 'src/app/products/services/products-api.service';

export interface DialogData {
  products: Product[];
}

@Component({
  selector: 'app-editing-order-products',
  templateUrl: './editing-order-products.component.html',
  styleUrls: ['./editing-order-products.component.scss']
})
export class EditingOrderProductsComponent implements OnInit, OnDestroy {

  loaded = false;
  destroy = new Subject<void>();

  products: ProductSelect[] = [];
  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];

  constructor(private productsService: ProductsApiService,
              public dialogRef: MatDialogRef<EditingOrderProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit(): void {

    this.productsService.getAll()
      .pipe(takeUntil(this.destroy))
      .pipe(map(values => values.map(item => this.getProductSelect(item))))
      .pipe(map(values => this.setSelectedProducts(values)))
      .subscribe(items => {this.products = items; this.loaded = true; });

  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  addItem(item: ProductSelect): void {
    item.isSelected = !item.isSelected;
  }

  setSelectedProducts(items: ProductSelect[]): ProductSelect[]
  {
    if (!this.data.products){
      return items;
    }
    for (const product of this.data.products)
    {
      items.find(x => x.id === product.id).isSelected = true;
    }
    return items;
  }

  getProductSelect(item: Product): ProductSelect
  {
    const productSelect: ProductSelect = {
      ...item,
      isSelected: false
    };
    return productSelect;
  }

  get selectedProducts(): Product[]{
    return this.products.filter(x => x.isSelected === true).map(item => item as Product);
  }

  get selectedProductsCount(): number{
    return this.products?.filter(x => x.isSelected === true).length;
  }
}
