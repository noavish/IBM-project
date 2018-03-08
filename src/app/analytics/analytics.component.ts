import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  yesRev:number;

  monthlyBestSeller: any;

  constructor( private salesService: SalesService) { }


  ngOnInit() {
    this.getMonthlyBestSeller();
  }

  getMonthlyBestSeller() {
    this.salesService.getMonthlyBestSellerFromBD().subscribe(
      data => this.monthlyBestSeller = data[0],
      error => console.log(error)
    );
  }
}
