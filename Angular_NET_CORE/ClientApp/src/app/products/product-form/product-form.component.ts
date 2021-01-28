import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';
import { Product } from '../models/product';
import { Size } from '../models/size';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<Product>();

  @Input()
  editable: boolean;

  categoriesEnum = Categories;
  categories: string[] = [];

  sizeEnum = Size;
  sizes: string[] = [];

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

  constructor() { }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);
    this.categories = Object.keys(Categories).filter(String);
    this.sizes = Object.keys(Size).filter(String);
  }

  get price()
  {
    return this.mainForm.get('price');
  }

  get quantity()
  {
    return this.mainForm.get('quantity');
  }

  get date()
  {
    return this.mainForm.get('date');
  }

  get productName()
  {
    return this.mainForm.get('productName');
  }

  get description()
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

  getProductFromForm(): Product
  {
    const form = this.mainForm.value;
    const obj: Product = {
      id: form.id,
      name: form.productName,
      category: form.productType,
      size: form.size,
      quantity: form.quantity,
      price: form.price,
      createdAt: new Date()
    };
    return obj;
  }

}
