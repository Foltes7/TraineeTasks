import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Order } from '../models/orders';
import { Status } from '../models/statuses';
import { LoadOrders } from '../state/orders-actions';


const ELEMENT_DATA: Order[] = [
  {id: 1, customerName: 'Hydrogen', cost: 1.0079, status: {id: 1, status: 'KEKE'}, customerAddress: 'Hydrogen2', createdAt: new Date()},
  {id: 2, customerName: 'Helium', cost: 4.0026, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 3, customerName: 'Lithium', cost: 6.941, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 4, customerName: 'Beryllium', cost: 9.0122, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 5, customerName: 'Boron', cost: 10.811, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 6, customerName: 'Carbon', cost: 12.0107, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 7, customerName: 'Nitrogen', cost: 14.0067, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 8, customerName: 'Oxygen', cost: 15.9994, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 9, customerName: 'Fluorine', cost: 18.9984, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
  {id: 10, customerName: 'Neon', cost: 20.1797, status:  {id: 1, status: 'KEKE'}, customerAddress: 'Helium2', createdAt: new Date()},
];


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'address', 'cost', 'status'];
  dataSource = ELEMENT_DATA;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(LoadOrders);
  }

}
