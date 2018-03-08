import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-sales-table',
  templateUrl: './user-sales-table.component.html',
  styleUrls: ['./user-sales-table.component.css']
})
export class UserSalesTableComponent implements OnInit {

  SalesTableData: any[];

  constructor(private salesService: SalesService, private authService: AuthService) { }
  user: any;

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      data => {
        this.user = data;
      },
      error2 => console.log(error2),
      () => this.getSalesLog()
    );
  }
  getSalesLog() {
    var userID = this.user.user.user_id
    this.salesService.getSalesLogByUser(userID).subscribe(data => {
      if (data.length < 1) {
        this.SalesTableData = [];
      } else {
        this.SalesTableData = data;
        console.log(data);
      }
    },
      error => console.log(error)
    );
  }
}


