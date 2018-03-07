import { Component, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { SalesService } from '../services/sales.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit, OnDestroy {
  items: any[];

  private chart: AmChart;
  graphData:any[]
  constructor(private salesService: SalesService, private AmCharts: AmChartsService) {}

  ngOnInit(){
    this.salesService.getSalesBySKU().subscribe(data=>{
      this.graphData = data
    },
    (err)=>{console.log(err)},
    ()=>this.createGraph()
  );
  }


createGraph(){
  var chart = this.AmCharts.makeChart( "chartdiv", {
    "type": "pie",
    "theme": "light",
    "dataProvider":this.graphData,
    "valueField": "value",
    "titleField": "sku_name",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
    "export": {
      "enabled": true
    }
  } );
}

// getSKU() {
//   this.salesService.getSKUFromDB(this.sale.product_id_fk).subscribe(
//     data => this.items = data,
//     error => console.log(error)
//   );
// }
ngOnDestroy() {
  if (this.chart) {
    this.AmCharts.destroyChart(this.chart);
  }
}
}
