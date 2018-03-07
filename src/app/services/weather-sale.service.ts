import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherSaleService {

  constructor(private http: HttpClient) { }
  
  getWeatherSales(): Observable<any> {
    return this.http.get<any>(`/api/weathersale`);
  }
}
