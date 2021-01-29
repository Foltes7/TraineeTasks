import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

const ELEMENT_DATA: Customer[] = [
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
