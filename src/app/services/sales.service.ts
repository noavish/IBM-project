import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/productModel';
import { SKU } from '../models/skuModel';


@Injectable()
export class SalesService {

  constructor( private http: HttpClient ) { }

  getSales(): Observable<any> {
    return this.http.get<any>('/sales');
  }

  getSalesByDate(): Observable<any> {
    return this.http.get<any>('/api/amount');
  }

  getProductsFromDB(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  getSKUFromDB(product_name: string): Observable<SKU[]> {
    return this.http.get<SKU[]>(`/sku/${product_name}`);
  }

  getFromAPI(location: string): Observable<any> {
    return this.http.get<any>(`/search_places/${location}`);
    // return this.http.get<any>(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=AIzaSyDOVMcO9XGEh9iGT_16wp_s4swj575tj_Y`,
    //   {headers: {'Access-Control-Allow-Origin': '*'}});
  }
}
