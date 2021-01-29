import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { FullProduct } from '../models/fullProduct';
import { NewProductCommand } from '../models/newProductCommand';
import { Product } from '../models/product';
import { Size } from '../models/size';

@Injectable()
export class ProductsApiService {

  constructor(private httpClient: HttpClient) { }

  getSizes(): Observable<Size[]>
  {
    return this.httpClient.get<Size[]>(environment.API + '/api/products/sizes');
  }

  getCategories(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(environment.API + '/api/products/categories');
  }

  getAll(): Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.API + '/api/products');
  }

  getById(id: number): Observable<FullProduct>
  {
    return this.httpClient.get<FullProduct>(environment.API + `/api/products/${id}`);
  }

  createNew(command: NewProductCommand): Observable<Product>
  {
    return this.httpClient.post<Product>(environment.API + `/api/products`, command);
  }

}
