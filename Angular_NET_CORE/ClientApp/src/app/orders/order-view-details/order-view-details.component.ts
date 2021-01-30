import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SmoothAppearance } from 'src/app/shared/animations/animations';
import { FullOrder } from '../models/fullOrder';
import { NewOrderCommand } from '../models/newOrderCommand';
import { UpdateOrderCommand } from '../models/updateOrderCommand';
import { LoadFullOrder, UpdateOrder } from '../state/orders-actions';
import { OrdersStore } from '../state/orders-state';

@Component({
  selector: 'app-order-view-details',
  templateUrl: './order-view-details.component.html',
  styleUrls: ['./order-view-details.component.scss'],
  animations: [SmoothAppearance]
})
export class OrderViewDetailsComponent implements OnInit, OnDestroy {

  loaded = false;

  fullOrder: FullOrder;

  destroy = new Subject<void>();

  private routeSubscription: Subscription;
  private id: number;

  editable = false;

  constructor(private route: ActivatedRoute,
              private store: Store,
              private router: Router, ) {
    this.routeSubscription = route.params.subscribe(async (params) => {
      this.id = params.id;
      this.store.dispatch(new LoadFullOrder(this.id));
      this.store.select(OrdersStore.getFullOrder)
        .pipe(takeUntil(this.destroy))
        .subscribe(x => {
          this.fullOrder = x;
          this.loaded = true;
        });
    });
   }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.destroy.next();
    this.destroy.complete();
  }

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
    const command: UpdateOrderCommand = {
      id: order.id,
      customerId: order.customerId,
      orderStatusId: order.orderStatusId,
      description: order.description,
      productIds: order.products.map(x => x.id)
    };
    this.store.dispatch(new UpdateOrder(command)).toPromise()
    .then(x => this.router.navigate(['orders']));
  }

}
