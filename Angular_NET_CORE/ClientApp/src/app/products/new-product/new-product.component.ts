import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  cancelHandler(): void
  {
    this.router.navigate(['products']);
  }

  saveFormHandler(product: Product): void
  {
    console.log(product);
  }


}
