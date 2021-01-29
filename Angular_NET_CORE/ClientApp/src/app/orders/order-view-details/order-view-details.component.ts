import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';

@Component({
  selector: 'app-order-view-details',
  templateUrl: './order-view-details.component.html',
  styleUrls: ['./order-view-details.component.scss']
})
export class OrderViewDetailsComponent implements OnInit {

  editable = false;

  constructor() { }

  ngOnInit(): void {
  }

  setEditableTrue(): void
  {
    this.editable = true;
  }

  cancelHandler(): void
  {
    this.editable = false;
  }

  saveFormHandler(order: Order): void
  {
    console.log(order);
  }

}
