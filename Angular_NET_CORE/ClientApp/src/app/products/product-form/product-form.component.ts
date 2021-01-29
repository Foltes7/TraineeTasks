import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
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
export class ProductFormComponent implements OnInit {

  @Select(ProductsStore.getSizes)
  public sizes$: Observable<Size[]>;

  @Select(ProductsStore.getCategories)
  public categories$: Observable<Category[]>;

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<FullProduct>();

  @Input()
  editable: boolean;


  public mainForm: FormGroup = new FormGroup({
    productNumber: new FormControl(''),
    productName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
    description: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0) ]),
    productType: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);

    this.store.dispatch(LoadSizes);
    this.store.dispatch(LoadCategories);
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
    const obj: FullProduct = {
      id: values.productNumber,
      name: values.productName,
      productCategory: values.productType,
      productSize: values.size,
      quantity: values.quantity,
      price: values.price,
      createdAt: values.date,
      description: values.description
    };
    return obj;
  }

}
