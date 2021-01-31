import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SmoothAppearance } from 'src/app/shared/animations/animations';
import { Customer } from '../models/customer';
import { LoadCustomers } from '../state/customers-actions';
import { CustomersStore } from '../state/customers-state';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  animations: [SmoothAppearance]
})
export class CustomersListComponent implements OnInit, OnDestroy {

  destroy = new Subject<void>();

  loaded = false;

  public customers: Customer[];

  displayedColumns: string[] = ['name', 'address', 'cost', 'count'];

  constructor(private store: Store,
              private router: Router) { }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  ngOnInit(): void {
    this.store.select(CustomersStore.getCustomers)
    .pipe(takeUntil(this.destroy))
    .subscribe(customers => {
      this.customers = customers;
      this.loaded = true;
    });
    this.store.dispatch(LoadCustomers);
  }

  newCustomer(): void
  {
    this.router.navigate(['/customers/new']);
  }

}
