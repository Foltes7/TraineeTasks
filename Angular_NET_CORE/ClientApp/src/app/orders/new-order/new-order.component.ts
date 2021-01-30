import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FullOrder } from '../models/fullOrder';

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

  saveFormHandler(order: FullOrder): void
  {
    console.log(order);
  }

}
