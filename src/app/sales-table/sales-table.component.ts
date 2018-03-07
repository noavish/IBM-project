import { Component, OnInit } from '@angular/core';
import {SalesService} from '../services/sales.service';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {
  title: string;
  SalesTableData: any[];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
  	this.title = "Your Sales History:";
    // this.getSalesArr();
  }
//   getSalesArr(){
//      this.salesService.getSalesTable().subscribe(
//       data => this.SalesTableData = data.map((item, index) => {
  
//       return item;
//   }),
//     error => console.log(error)
//   );
// }

}
