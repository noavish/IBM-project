import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/productModel';
import { SKU } from '../models/skuModel';
import {Sale} from '../models/saleModel';

@Injectable()
export class SalesService {

  constructor( private http: HttpClient ) { }

  getSales(): Observable<any[]> {
    return this.http.get<any[]>('/api/sales');
  }

  getProductsFromDB(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getSKUFromDB(product_id: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/sku/${product_id}`);
  }

  getFromAPI(location: string): Observable<any> {
    return this.http.get<any>(`/search_places/${location}`);
    // return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=AIzaSyDOVMcO9XGEh9iGT_16wp_s4swj575tj_Y`,
    //   {headers: {'Access-Control-Allow-Origin': '*'}});
  }

  addSaleToDB(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>('/api/logSale', sale);
  }
}
