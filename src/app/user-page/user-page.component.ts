import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  logSale = new EventEmitter<string|MaterializeAction>();
  orderInventory = new EventEmitter<string|MaterializeAction>();
  revert = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

  openLogSale() {
    this.logSale.emit({action: 'modal', params: ['open']});
  }

  openOrderInventory() {
    this.orderInventory.emit({action: 'modal', params: ['open']});
  }

  closeLog() {
    this.logSale.emit({action: 'modal', params: ['close']});
  }

  closeOrder() {
    this.orderInventory.emit({action: 'modal', params: ['close']});
  }

  markTaskDone() {
  }

  openRevert() {
    this.revert.emit({action: 'modal', params: ['open']});
  }

  closeRevert() {
    this.revert.emit({action: 'modal', params: ['close']});
  }

}
