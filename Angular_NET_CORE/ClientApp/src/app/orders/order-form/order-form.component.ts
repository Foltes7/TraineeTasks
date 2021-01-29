import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/customers/models/customer';
import { Order } from '../models/orders';
import { Status } from '../models/statuses';

const ELEMENT_DATA: Customer[] = [ // TODO REMOVE
  {id: 1, customerName: 'Hydrogen', totalCost: 1.0079, ordersCount: 5, customerAddress: 'Hydrogen2', createdAt: new Date()},
  {id: 2, customerName: 'Helium', totalCost: 4.0026, ordersCount: 1, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 3, customerName: 'Lithium', totalCost: 6.941, ordersCount: 0, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 4, customerName: 'Beryllium', totalCost: 9.0122, ordersCount: 10, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 5, customerName: 'Boron', totalCost: 10.811, ordersCount: 15, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 6, customerName: 'Carbon', totalCost: 12.0107, ordersCount: 17, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 7, customerName: 'Nitrogen', totalCost: 14.0067, ordersCount: 16, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 8, customerName: 'Oxygen', totalCost: 15.9994, ordersCount: 12, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 9, customerName: 'Fluorine', totalCost: 18.9984, ordersCount: 2, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 10, customerName: 'Neon', totalCost: 20.1797, ordersCount: 2, customerAddress: 'Helium2', createdAt: new Date()},
];

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  customers = ELEMENT_DATA;

  statusEnum = Status;
  statuses: string[] = [];

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<Order>();

  @Input()
  editable: boolean;

  public mainForm: FormGroup = new FormGroup({
    orderNumber: new FormControl(''),
    comment: new FormControl('', []),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    customer: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    date: new FormControl('',  [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {
    this.statuses = Object.keys(Status).filter(String);
  }

  cancelHandler(): void
  {
    this.cancelEvent.emit();
  }

  saveForm(): void
  {
    // this.saveEvent.emit(this.getProductFromForm());
  }

}
