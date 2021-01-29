import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Customer } from 'src/app/customers/models/customer';
import { EdititngOrderProductsComponent } from 'src/app/shared/edititng-order-products/edititng-order-products.component';
import { FullOrder } from '../models/fullOrder';
import { Order } from '../models/orders';
import { Status } from '../models/statuses';

const ELEMENT_DATA: Customer[] = [ // TODO REMOVE
  {id: 1, name: 'Hydrogen', totalCost: 1.0079, ordersCount: 5, address: 'Hydrogen2'},
  {id: 2, name: 'Helium', totalCost: 4.0026, ordersCount: 1, address: 'Helium2'},
  {id: 3, name: 'Lithium', totalCost: 6.941, ordersCount: 0, address: 'Helium2'},
  {id: 4, name: 'Beryllium', totalCost: 9.0122, ordersCount: 10, address: 'Helium2'},
  {id: 5, name: 'Boron', totalCost: 10.811, ordersCount: 15, address: 'Helium2'},
  {id: 6, name: 'Carbon', totalCost: 12.0107, ordersCount: 17, address: 'Helium2'},
  {id: 7, name: 'Nitrogen', totalCost: 14.0067, ordersCount: 16, address: 'Helium2'},
  {id: 8, name: 'Oxygen', totalCost: 15.9994, ordersCount: 12, address: 'Helium2'},
  {id: 9, name: 'Fluorine', totalCost: 18.9984, ordersCount: 2, address: 'Helium2'},
  {id: 10, name: 'Neon', totalCost: 20.1797, ordersCount: 2, address: 'Helium2'},
];

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price'];

  customers = ELEMENT_DATA;

  statusEnum = Status;
  statuses: string[] = [];

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


  constructor(public dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.date?.setValue(today);
    this.statuses = Object.keys(Status).filter(String);
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
