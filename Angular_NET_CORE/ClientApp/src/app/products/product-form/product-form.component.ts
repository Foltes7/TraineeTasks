import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Category } from '../models/category';
import { FullProduct } from '../models/fullProduct';
import { Size } from '../models/size';
import { LoadCategories, LoadSizes } from '../state/products-actions';
import { ProductsStore } from '../state/products-state';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges, OnDestroy {

  destroy = new Subject<void>();

  sizes: Size[];
  categories: Category[];

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<FullProduct>();

  @Input()
  editable: boolean;

  @Input()
  fullProduct: FullProduct;


  public mainForm: FormGroup = new FormGroup({
    productNumber: new FormControl(''),
    productName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(45) ]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(45) ]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0) ]),
    productType: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });

  constructor(private store: Store) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.fullProduct)
    {
      const date = new Date(this.fullProduct.createdAt).toISOString().split('T')[0];
      this.mainForm.setValue({
          productNumber: this.fullProduct.id,
          productName:  this.fullProduct.name,
          description: this.fullProduct.description,
          quantity: this.fullProduct.quantity,
          price: this.fullProduct.price,
          productType: this.fullProduct.productCategory.id,
          size: this.fullProduct.productSize.id,
          date
        });
    }

    this.checkFormSelectedStatus();
  }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);

    this.store.dispatch(LoadSizes);
    this.store.dispatch(LoadCategories);

    this.store.select(ProductsStore.getSizes)
    .pipe(takeUntil(this.destroy))
    .subscribe(sizes => {
      this.sizes = sizes;
    });

    this.store.select(ProductsStore.getCategories)
    .pipe(takeUntil(this.destroy))
    .subscribe(categories => {
      this.categories = categories;
    });

    this.checkFormSelectedStatus();
  }

  checkFormSelectedStatus(): void
  {
    if (!this.editable)
    {
      this.productType.disable();
      this.size.disable();
    }else{
      this.productType.enable();
      this.size.enable();
    }
  }

  get price(): AbstractControl
  {
    return this.mainForm.get('price');
  }

  get quantity(): AbstractControl
  {
    return this.mainForm.get('quantity');
  }

  get date(): AbstractControl
  {
    return this.mainForm.get('date');
  }

  get productName(): AbstractControl
  {
    return this.mainForm.get('productName');
  }

  get description(): AbstractControl
  {
    return this.mainForm.get('description');
  }

  get size(): AbstractControl
  {
    return this.mainForm.get('size');
  }

  get productType(): AbstractControl{
    return this.mainForm.get('productType');
  }

  cancelHandler(): void
  {
    this.cancelEvent.emit();
  }

  saveForm(): void
  {
    this.saveEvent.emit(this.getProductFromForm());
  }

  getProductFromForm(): FullProduct
  {
    const values = this.mainForm.value;
    const productSize = this.sizes.find(x => x.id === values.size);
    const productCategory = this.categories.find(x => x.id === values.productType);
    const obj: FullProduct = {
      id: values.productNumber,
      name: values.productName,
      productCategory,
      productSize,
      quantity: values.quantity,
      price: values.price,
      createdAt: values.date,
      description: values.description
    };
    return obj;
  }

}
