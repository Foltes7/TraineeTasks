import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from 'src/app/customers/models/customer';
import { LoadCustomers } from 'src/app/customers/state/customers-actions';
import { CustomersStore } from 'src/app/customers/state/customers-state';
import { Product } from 'src/app/products/models/product';
import { DialogData, EdititngOrderProductsComponent } from 'src/app/shared/editing-order-products/editing-order-products.component';
import { FullOrder } from '../models/fullOrder';
import { Status } from '../models/status';
import { LoadStatuses } from '../state/orders-actions';
import { OrdersStore } from '../state/orders-state';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy, OnChanges {

  destroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];

  statuses: Status[];
  customers: Customer[];

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<FullOrder>();

  @Input()
  editable: boolean;

  @Input()
  fullOrder: FullOrder;

  products: Product[] = [];

  public mainForm: FormGroup = new FormGroup({
    orderNumber: new FormControl(''),
    comment: new FormControl('', []),
    cost: new FormControl('', [Validators.min(0)]),
    customer: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });


  constructor(public dialog: MatDialog,
              private store: Store) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.checkFormSelectedStatus();
  }

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

    this.checkFormSelectedStatus();
  }

  checkFormSelectedStatus(): void
  {
    if (!this.editable)
    {
      this.status.disable();
      this.customer.disable();
    }else{
      this.status.enable();
      this.customer.enable();
    }
  }

  get cost(): AbstractControl
  {
    return this.mainForm.get('cost');
  }

  get date(): AbstractControl
  {
    return this.mainForm.get('date');
  }

  get status(): AbstractControl
  {
    return this.mainForm.get('status');
  }

  get customer(): AbstractControl
  {
    return this.mainForm.get('customer');
  }

  cancelHandler(): void
  {
    this.cancelEvent.emit();
  }

  saveForm(): void
  {
    this.saveEvent.emit(this.getOrderFromForm());
  }

  manageProducts(): void
  {
    const data: DialogData = {
      products: this.products,
    };
    const dialogRef = this.dialog.open(EdititngOrderProductsComponent, { data });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy))
    .subscribe((products: Product[]) => {
      if (products)
      {
        this.products = products;
        this.cost.setValue(this.getCost(this.products));
      }
    });
  }

  getCost(products: Product[])
  {
    return this.products.map(x => x.price).reduce((cv, pv) => cv + pv);
  }

  getOrderFromForm(): FullOrder
  {
    const values = this.mainForm.value;

    const obj: FullOrder = {
      id: values.orderNumber,
      cost: values.cost,
      orderStatusId: values.status,
      description: values.comment,
      createdAt: values.date,
      customerId: values.customer,
      products: this.products
    };
    return obj;
  }

}
