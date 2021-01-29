import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-edititng-order-products',
  templateUrl: './edititng-order-products.component.html',
  styleUrls: ['./edititng-order-products.component.scss']
})
export class EdititngOrderProductsComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];
  constructor() { }

  ngOnInit(): void {
  }

}
