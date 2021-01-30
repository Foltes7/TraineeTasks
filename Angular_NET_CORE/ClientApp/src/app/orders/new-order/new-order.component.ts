import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { FullOrder } from '../models/fullOrder';
import { NewOrderCommand } from '../models/newOrderCommand';
import { NewOrder } from '../state/orders-actions';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(private router: Router,
              private store: Store) { }

  ngOnInit(): void {
  }

  cancelHandler(): void
  {
    this.router.navigate(['orders']);
  }

  saveFormHandler(order: FullOrder): void
  {
    const obj: NewOrderCommand = {
      customerId: order.customerId,
      productIds: order.products.map(x => x.id),
      orderStatusId: order.orderStatusId,
      description: order.description
    };
    this.store.dispatch(new NewOrder(obj)).toPromise()
    .then(x => this.router.navigate(['orders']));
  }

}
