import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from 'src/app/customers/models/customer';
import { LoadCustomers } from 'src/app/customers/state/customers-actions';
import { CustomersStore } from 'src/app/customers/state/customers-state';
import { EdititngOrderProductsComponent } from 'src/app/shared/edititng-order-products/edititng-order-products.component';
import { FullOrder } from '../models/fullOrder';
import { Order } from '../models/orders';
import { Status } from '../models/statuses';
import { LoadStatuses } from '../state/orders-actions';
import { OrdersStore } from '../state/orders-state';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];

  statuses: Status[];
  customers: Customer[];

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<Order>();

  @Input()
  editable: boolean;

  fullOrder: FullOrder;

  public mainForm: FormGroup = new FormGroup({
    orderNumber: new FormControl(''),
    comment: new FormControl('', []),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    customer: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });


  constructor(public dialog: MatDialog,
              private store: Store) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {

    this.store.dispatch([LoadStatuses, LoadCustomers]);

    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);

    this.store.select(OrdersStore.getStatuses)
    .pipe(takeUntil(this.destroy))
    .subscribe(statuses => {
      this.statuses = statuses;
    });

    this.store.select(CustomersStore.getCustomers)
    .pipe(takeUntil(this.destroy))
    .subscribe(customers => {
      this.customers = customers;
    });
  }

  get date(): AbstractControl
  {
    return this.mainForm.get('date');
  }

  cancelHandler(): void
  {
    this.cancelEvent.emit();
  }

  saveForm(): void
  {
    // this.saveEvent.emit(this.getProductFromForm());
  }

  manageProducts(): void
  {
    const dialogRef = this.dialog.open(EdititngOrderProductsComponent, {});

    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy))
    .subscribe((result: boolean) => {
      console.log('closed');
    });
  }

}
