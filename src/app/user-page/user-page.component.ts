import { Component, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { SalesService } from '../sales.service';
import { Product } from '../productModel';
import { SKU } from '../skuModel';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  logSaleClicked = new EventEmitter<string|MaterializeAction>();
  orderInventory = new EventEmitter<string|MaterializeAction>();
  revert = new EventEmitter<string|MaterializeAction>();
  // timeStampInMs = window.performance && window.performance.now && window.performance.timing &&
  // window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
  timeStamp = new Date();
  // displayTime = this.timeStamp.toLocaleDateString();
  products: Product[];
  chosenProduct: string;
  SKUs: SKU[];
  // SKU: SKU = new SKU();

  constructor( private salesService: SalesService ) { }

  ngOnInit() {
    this.getAllSales();
  }

  getAllSales() {
    this.salesService.getSales().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  getProducts() {
    console.log('2');
    this.salesService.getProductsFromDB().subscribe(
      data => {this.products = data; console.log(this.products)},
      error => console.log(error)
    );
  }

  getSKU() {
    console.log('3');
    console.log(this.chosenProduct);
    this.salesService.getSKUFromDB(this.chosenProduct).subscribe(
      data => {this.SKUs = data; console.log(this.SKUs);},
      error => console.log(error)
    );
  }

  openLogSale() {
    console.log('1');
    this.logSaleClicked.emit({action: 'modal', params: ['open']});
    this.getProducts();
  }

  openOrderInventory() {
    this.orderInventory.emit({action: 'modal', params: ['open']});
  }

  closeLog() {
    this.logSaleClicked.emit({action: 'modal', params: ['close']});
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

  logSale() {
    const date = this.timeStamp.toISOString().split('T')[0];
    const timeInGMT = this.timeStamp.toISOString().split('T')[1].split('.')[0];
    console.log(date, timeInGMT);
  }
}
