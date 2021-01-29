import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsApiService {

  constructor(private httpClient: HttpClient) { }
}
