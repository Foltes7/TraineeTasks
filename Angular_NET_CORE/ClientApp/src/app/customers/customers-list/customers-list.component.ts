import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

const ELEMENT_DATA: Customer[] = [
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
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address', 'cost', 'count'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
