import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.scss']
})
export class ProductViewDetailsComponent implements OnInit {

  editable = false;

  constructor() { }

  ngOnInit(): void {
  }

  setEditableTrue(): void
  {
    this.editable = true;
  }

  cancelHandler()
  {
    this.editable = false;
  }

  saveFormHandler(product: Product)
  {
    console.log(product);
  }


}
