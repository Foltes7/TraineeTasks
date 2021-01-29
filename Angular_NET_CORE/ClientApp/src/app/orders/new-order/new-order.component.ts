import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../models/orders';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelHandler(): void
  {
    this.router.navigate(['orders']);
  }

  saveFormHandler(order: Order): void
  {
    console.log(order);
  }

}
