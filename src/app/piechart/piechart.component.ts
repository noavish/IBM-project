import { Component, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { SalesService } from '../services/sales.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PiechartComponent implements OnInit, OnDestroy {
  items: any[];
  isSwitched: string;
  private chart: AmChart;
  graphData: any[];
  constructor(private salesService: SalesService, private AmCharts: AmChartsService) {}

  ngOnInit() {
    this.salesService.getSalesCountBySKU().subscribe(
      data => this.graphData = data,
      err => console.log(err),
      () => this.createGraph()
    );
  }

  salesByCount() {
    this.salesService.getSalesCountBySKU().subscribe(
      data => this.graphData = data,
      err => console.log(err),
      () => this.createGraph()
    );
  }

  salesByRev() {
    this.salesService.getSalesRevBySKU().subscribe(
      data => this.graphData = data,
      err => console.log(err),
      () => this.createGraph()
    );
  }


createGraph() {
  const chart = this.AmCharts.makeChart( 'chartdiv3', {
    'type': 'pie',
    'theme': 'light',
    'dataProvider': this.graphData,
    'valueField': 'value',
    'titleField': 'sku_name',
    'outlineAlpha': 0.4,
    'depth3D': 15,
    'balloonText': '[[title]]<br><span style=\'font-size:14px\'><b>[[value]]</b> ([[percents]]%)</span>',
    'angle': 30,
    'export': {
      'enabled': true
    }
  } );
}

ngOnDestroy() {
  if (this.chart) {
    this.AmCharts.destroyChart(this.chart);
  }
}
}
