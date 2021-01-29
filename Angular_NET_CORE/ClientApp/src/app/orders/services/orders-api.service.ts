import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FullOrder } from '../models/fullOrder';
import { Order } from '../models/orders';
import { Status } from '../models/status';

@Injectable()
export class OrdersApiService {


  constructor(private httpClient: HttpClient) { }

  getStatuses(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(environment.API + '/api/orders/status');
  }

  getAll(): Observable<Order[]>
  {
    return this.httpClient.get<Order[]>(environment.API + '/api/orders');
  }


  getById(id: number): Observable<FullOrder>
  {
    return this.httpClient.get<FullOrder>(environment.API + `/api/orders/${id}`);
  }
}
