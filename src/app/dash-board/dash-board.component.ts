import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  tasks: any =[{text: "call XXXX"},{text: "send email related to..."},{text: "check inventory"},{text: "check delivers"}];
  newTask:string;
  constructor() { }

  ngOnInit() {
  }
  addTask(){


  }
}
