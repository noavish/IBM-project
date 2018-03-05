import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/productModel';
import { SKU } from '../models/skuModel';
import {Sale} from '../models/saleModel';

@Injectable()
export class SalesService {

  constructor( private http: HttpClient ) { }

  getSalesSums(): Observable<any[]> {
    return this.http.get<any[]>('/api/sales');
  }

  getSalesByDate(): Observable<any> {
    return this.http.get<any>('/api/amount');
  }

  getProductsFromDB(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getSKUFromDB(product_id: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/sku/${product_id}`);
  }

  getFromAPI(location: string): Observable<any> {
    return this.http.get<any>(`/search_places/${location}`);
  }

  addSaleToDB(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>('/api/logSale', sale);
  }
}
