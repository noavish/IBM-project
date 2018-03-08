import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  // private cityName: string = 'Paris';
  // private daysForecast: number = 7;
  // private appid = "&appid=eae18de7d92e5fa1893eeb187956805f";
  constructor( private http: HttpClient ) { }

  // dailyCall(): Observable<any> {
  //   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}${this.appid}`);
  // }
  //
  // weeklyCall(): Observable<any> {
  //   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&cnt=${this.daysForecast}${this.appid}`);
  // }

  getCityWeatherFromAPI(city_name: string): Observable<any> {
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&APPID=8ebb385c56cb162f0265a7de786cfeb1&units=metric`);
  }
}
