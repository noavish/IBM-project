import { WeatherService } from '../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private WeatherService: WeatherService) { }

  ngOnInit() {
    // this.dailyWeatheData();
    this.weeklyWeatheData();
  }


  dailyWeatheData() {
    this.WeatherService.dailyCall().subscribe(data => {
      console.log(data);
    }),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
  }

  weeklyWeatheData() {
    this.WeatherService.weeklyCall().subscribe(data => {
      console.log(data);
    }),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
  }
}
