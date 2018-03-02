import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from './productModel';
import { SKU } from './skuModel';


@Injectable()
export class SalesService {

  constructor( private http: HttpClient ) { }

  getSales(): Observable<any> {
    return this.http.get<any>('/sales');
  }

  getProductsFromDB(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  getSKUFromDB(product_name: string): Observable<SKU[]> {
    console.log(product_name);
    return this.http.get<SKU[]>(`/sku/${product_name}`);
  }
}
