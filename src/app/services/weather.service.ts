import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  private cityName: string = 'Paris';
  private daysForecast: number = 7;
  private appid = "&appid=eae18de7d92e5fa1893eeb187956805f";
  constructor(private _http: HttpClient) { }

  dailyCall(): Observable<any> {
    return this._http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}${this.appid}`);
  }

  weeklyCall(): Observable<any> {
    return this._http.get<any>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&cnt=${this.daysForecast}${this.appid}`);
  }
}
