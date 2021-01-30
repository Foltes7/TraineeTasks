import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-editing-order-products',
  templateUrl: './editing-order-products.component.html',
  styleUrls: ['./editing-order-products.component.scss']
})
export class EdititngOrderProductsComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];
  constructor() { }

  ngOnInit(): void {
  }

}
