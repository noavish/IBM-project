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

  getCountrySalesByProducts(country_code: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/sales/${country_code}`);
  }

  getSalesSumCountries(): Observable<any[]> {
    return this.http.get<any[]>('/api/countriessales');
  }

  getSalesByDate(): Observable<any> {
    return this.http.get<any>('/api/amount');
  }

  getSalesCountBySKU(): Observable<any> {
    return this.http.get('/api/skuSalesCount');
  }

  getSalesRevBySKU(): Observable<any> {
    return this.http.get('/api/skuSalesRev');
  }

  getSalesByPerson(id): Observable<any> {
    return this.http.get<any>(`/api/amount/${id}`);
  }

  getProductsFromDB(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
  getSalesByUser(userID): Observable<any> {
    return this.http.get<Product[]>(`/api/usersaels/${userID}`);
  }

  getSalesLogByUser(userID): Observable<any> {
    return this.http.get<Product[]>(`/api/usersaelslog/${userID}`);
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

  getBestSellersFromDB(): Observable<any> {
    return this.http.get<any>('/api/bestSellers');
  }

  getTopCountryRev(): Observable<any> {
    return this.http.get('/api/bestcountyrev');
  }

  getTopProductRev (): Observable<any> {
    return this.http.get('/api/bestsellerproduct');
  }

  getGlobalRev (): Observable<any> {
    return this.http.get('/api/yesglobalrev');
  }

}

