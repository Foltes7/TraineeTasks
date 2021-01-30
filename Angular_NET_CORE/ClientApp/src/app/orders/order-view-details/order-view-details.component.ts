import { Component, OnInit } from '@angular/core';
import { FullOrder } from '../models/fullOrder';

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

  saveFormHandler(order: FullOrder): void
  {
    console.log(order);
  }

}
