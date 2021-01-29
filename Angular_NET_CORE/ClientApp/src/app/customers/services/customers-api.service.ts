import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomersApiService {

  constructor(private httpClient: HttpClient) { }
}
