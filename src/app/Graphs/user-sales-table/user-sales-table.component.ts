import {AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-sales-table',
  templateUrl: './user-sales-table.component.html',
  styleUrls: ['./user-sales-table.component.css']
})
export class UserSalesTableComponent implements OnInit, OnChanges {

  SalesTableData: any[];


  constructor(private salesService: SalesService, private authService: AuthService) { }
  @Input() user: any;

  ngOnInit() {
    this.salesService.newSaleLogged.subscribe(data => {
      this.getSalesLog();
    });
  }

  ngOnChanges() {
    this.getSalesLog();
  }




  getSalesLog() {
    // console.log(this.user.user_id);
    this.salesService.getSalesLogByUser(this.user.user_id).subscribe(data => {
      if (data.length < 1) {
        this.SalesTableData = [];
      } else {
        this.SalesTableData = data;
      }
    },
      error => console.log(error)
    );
  }
}


