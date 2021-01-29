import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../models/orders';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<Order>();

  @Input()
  editable: boolean;

  constructor() { }

  ngOnInit(): void {
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
