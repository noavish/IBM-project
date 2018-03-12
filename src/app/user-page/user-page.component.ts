import {
  Component, EventEmitter, OnInit, ElementRef, NgZone, ViewChild, AfterViewChecked,

} from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { SalesService } from '../services/sales.service';
import { Product } from '../models/productModel';
import { SKU } from '../models/skuModel';
import { Sale } from '../models/saleModel';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import {AgmMap, MapsAPILoader} from '@agm/core';
import { AuthService } from '../services/auth.service';
import { Task } from '../models/taskModel';
import { TaskService } from '../services/task.service';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  logSaleClicked = new EventEmitter<string|MaterializeAction>();
  revert = new EventEmitter<string|MaterializeAction>();
  sale: Sale = new Sale();
  timeStamp = new Date();
  products: Product[];
  chosenSKU: number;
  items: any[];
  channel = 1;
  todaySales: any;
  user: any;

  myTasks: Task[];
  task: Task = new Task();




  constructor( private salesService: SalesService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private authService: AuthService, private taskService: TaskService, private weatherService: WeatherService ) { }


  ngOnInit() {

  }

  openLogSale() {
    this.logSaleClicked.emit({action: 'modal', params: ['open']});
  }

  closeLog() {
    this.logSaleClicked.emit({action: 'modal', params: ['close']});
  }

  getUser() {
    this.authService.getCurrentUser().subscribe(data => {
      this.user = data.user;
    },
      (error) => {console.log(error); },
      () => {this.getMyTasks();
        this.salesService.getTodaysSales(this.user.username).subscribe(data => this.todaySales = (data[0].count));
        }
      );

  }

  getMyTasks() {
    this.taskService.getMyTasks(this.user.user_id).subscribe(
      data => {
        this.myTasks = data;
      },
      error => console.log(error)
    );
  }




}
