import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseNewId } from 'src/app/shared/models/responseNewId';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { FullCustomer } from '../models/full-customer';

@Injectable()
export class CustomersApiService {

  constructor(private httpClient: HttpClient) { }

  getFullCustomer(id: number): Observable<FullCustomer>
  {
    return this.httpClient.get<FullCustomer>(environment.API + `/api/customers/${id}`);
  }

  getAllCustomers(): Observable<Customer[]>
  {
    return this.httpClient.get<Customer[]>(environment.API + `/api/customers`);
  }

  newCustomer(name: string, adress: string): Observable<Customer>
  {
    const obj = {
      name,
      adress
    };
    return this.httpClient.post<Customer>(environment.API + `/api/customers`, obj);
  }
}
