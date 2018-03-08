import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  yesRev:any;
  topCounRev: any;
  topProdRev:any;
  monthlyBestSeller: any;

  constructor( private salesService: SalesService) { }


  ngOnInit() {
    this.getAnalyzedData();
  }

  getAnalyzedData() {
    this.salesService.getMonthlyBestSellerFromBD().subscribe(
      data => {this.monthlyBestSeller = data[0]
        console.log(data)
    },
      error => console.log(error)
    );

    this.salesService.getGlobalRev().subscribe(
      data => this.yesRev = data[0].value
      ,
      error => console.log(error)
    );

    this.salesService.getTopCountryRev().subscribe(
      data => this.topCounRev = data[0]
        ,
      error => console.log(error)
    );

    this.salesService.getTopProductRev().subscribe(
      data => this.topProdRev = data[0]
        ,
      error => console.log(error)
    );


  }
}
