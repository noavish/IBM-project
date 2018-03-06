import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-user-sales',
  templateUrl: './user-sales.component.html',
  styleUrls: ['./user-sales.component.css']
})
export class UserSalesComponent implements OnInit {

  uSales = 4000;
  constructor(private AmCharts: AmChartsService,private salesService: SalesService) { }
  chart: AmChart;
  userID: number=2;

  ngOnInit() {
    this.salesService.getSalesByUser(this.userID).subscribe(data => {
      this.uSales = data[0].user_sum;
      console.log(data[0].user_sum)
    },
      (error2 => console.log(error2)),
      () => {this.createGauge()}
      );
    
  }


    createGauge(){
      this.chart = this.AmCharts.makeChart("chartdiv", {
        "theme": "light",
        "type": "gauge",
        "axes": [{
          'topText':this.uSales+'units',
          "topTextFontSize": 12,
          "topTextYOffset": 90,
          "axisColor": "#3100ea",
          "axisThickness": 1,
          "endValue": 10000,
          "gridInside": true,
          "inside": true,
          "radius": "50%",
          "valueInterval": 1000,
          "tickColor": "#6755dc",
          "startAngle": -90,
          "endAngle": 90,
          "unit": "",
          "bandOutlineAlpha": 0,
          "bands": [{
            "color": "#0955ff",
            "endValue": 10000,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0.5, 0, -0.5],
            "startValue": 0
          }, {
            "color": "#3cd363",
            "endValue": 0,
            "innerRadius": "105%",
            "radius": "170%",
            "gradientRatio": [0.5, 0, -0.5],
            "startValue": 0
          }]
        }],
        "arrows": [{
          "alpha": 1,
          "innerRadius": "35%",
          "nailRadius": 0,
          "radius": "170%"
        }]
      });

      this.numSales(this.uSales,this.chart);


    }

  numSales(value,chart) {
    console.log(this.chart)
    chart.arrows[0].value=value;
    chart.axes[0].TopText= value + " units";
    // adjust darker band to new value
    this.chart.axes[0].bands[1].endValue=value;
  }
}
