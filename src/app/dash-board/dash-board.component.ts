import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  // user: any;
  // tasks: any =[{text: "call XXXX"},{text: "send email related to..."},{text: "check inventory"},{text: "check delivers"}];
  // newTask: string;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }

  addTask() {


  }
}
