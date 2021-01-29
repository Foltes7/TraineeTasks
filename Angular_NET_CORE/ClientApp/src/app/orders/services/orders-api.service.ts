import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrdersApiService {

  constructor(private httpClient: HttpClient) { }
}
