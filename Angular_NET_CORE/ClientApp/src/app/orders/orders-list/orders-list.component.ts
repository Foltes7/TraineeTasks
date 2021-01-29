import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SmoothAppearance } from 'src/app/shared/animations/animations';
import { Order } from '../models/orders';
import { LoadOrders } from '../state/orders-actions';
import { OrdersStore } from '../state/orders-state';



@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  animations: [SmoothAppearance]
})
export class OrdersListComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();
  displayedColumns: string[] = ['number', 'name', 'address', 'cost', 'status'];
  loaded = false;

  orders: Order[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(LoadOrders);
    this.store.select(OrdersStore.getOrders)
    .pipe(takeUntil(this.destroy))
    .subscribe(orders => {
      this.orders = orders;
      this.loaded = true;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
