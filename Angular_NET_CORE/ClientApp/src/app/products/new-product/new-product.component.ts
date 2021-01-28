import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from '../models/categories';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  categoriesEnum = Categories;
  categories: string[] = [];

  public mainForm: FormGroup = new FormGroup({
    productNumber: new FormControl(''),
    productName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
    description: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0) ]),
    productType: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);

    this.categories = Object.keys(Categories).filter(String);
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

  goToCustomersPage(): void
  {
    this.router.navigate(['products']);
  }

  createNewProduct()
  {
    console.log(this.mainForm.value);
  }

}
