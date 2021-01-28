import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { Product } from '../models/product';
import { Size } from '../models/size';

const ELEMENT_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 1.0079, quantity: 2, size: Size.Small, category: Categories.Food  },
  {id: 2, name: 'Helium', price: 4.0026, quantity: 23, size: Size.Large, category: Categories.Food  },
  {id: 3, name: 'Lithium', price: 6.941, quantity: 12, size: Size.Large, category: Categories.Food },
  {id: 4, name: 'Beryllium', price: 9.0122, quantity: 5, size: Size.Small, category: Categories.Food  },
  {id: 5, name: 'Boron', price: 10.811, quantity: 8, size: Size.Medium, category: Categories.Food  },
  {id: 6, name: 'Carbon', price: 12.0107, quantity: 1, size: Size.Small, category: Categories.Food },
  {id: 7, name: 'Nitrogen', price: 14.0067, quantity: 5, size: Size.Small, category: Categories.Food  },
  {id: 8, name: 'Oxygen', price: 15.9994, quantity: 122, size: Size.Medium, category: Categories.Food  },
  {id: 9, name: 'Fluorine', price: 18.9984, quantity: 234, size: Size.Medium, category: Categories.Food },
  {id: 10, name: 'Neon', price: 20.1797, quantity: 22, size: Size.Medium, category: Categories.Food },
];

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'size', 'quantity', 'price', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
