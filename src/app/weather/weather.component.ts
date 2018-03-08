import { WeatherService } from '../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor( private weatherService: WeatherService ) { }

  ngOnInit() {
    // this.dailyWeatheData();
    // this.weeklyWeatherData();
  }


  // dailyWeatherData() {
  //   this.weatherService.dailyCall().subscribe(data => {
  //     console.log(data);
  //   }),
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         console.log("Client-side error occured.");
  //       } else {
  //         console.log("Server-side error occured.");
  //       }
  //     }
  // }
  //
  // weeklyWeatherData() {
  //   this.weatherService.weeklyCall().subscribe(data => {
  //     console.log(data);
  //   }),
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         console.log("Client-side error occured.");
  //       } else {
  //         console.log("Server-side error occured.");
  //       }
  //     }
  // }
}
