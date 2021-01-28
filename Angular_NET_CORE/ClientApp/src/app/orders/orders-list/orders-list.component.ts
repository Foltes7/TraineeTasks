import { Component, OnInit } from '@angular/core';
import { Order } from '../models/orders';
import { Status } from '../models/statuses';


const ELEMENT_DATA: Order[] = [
  {id: 1, customerName: 'Hydrogen', cost: 1.0079, status: Status.Delivered, customerAddress: 'Hydrogen2'},
  {id: 2, customerName: 'Helium', cost: 4.0026, status: Status.New, customerAddress: 'Helium2'},
  {id: 3, customerName: 'Lithium', cost: 6.941, status: Status.Paid, customerAddress: 'Helium2'},
  {id: 4, customerName: 'Beryllium', cost: 9.0122, status: Status.Shipped, customerAddress: 'Helium2'},
  {id: 5, customerName: 'Boron', cost: 10.811, status: Status.Closed, customerAddress: 'Helium2'},
  {id: 6, customerName: 'Carbon', cost: 12.0107, status: Status.New, customerAddress: 'Helium2'},
  {id: 7, customerName: 'Nitrogen', cost: 14.0067, status: Status.Delivered, customerAddress: 'Helium2'},
  {id: 8, customerName: 'Oxygen', cost: 15.9994, status: Status.Paid, customerAddress: 'Helium2'},
  {id: 9, customerName: 'Fluorine', cost: 18.9984, status: Status.New, customerAddress: 'Helium2'},
  {id: 10, customerName: 'Neon', cost: 20.1797, status: Status.Paid, customerAddress: 'Helium2'},
];


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'address', 'cost', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
