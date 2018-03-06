import {Component, AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import {SalesService} from '../services/sales.service';

@Component({
  selector: 'app-facechart',
  templateUrl: './facechart.component.html',
  styleUrls: ['./facechart.component.css'],
})
export class FacechartComponent implements OnInit, OnDestroy {
  graphData: any[];
  private chart: AmChart;

  constructor(private AmCharts: AmChartsService, private salesService: SalesService) {}

  ngOnInit() {
    this.salesService.getBestSellersFromDB().subscribe(
      data => this.graphData = data.map((item, index) => {
        item.bullet = this.randonImg();
        item.color = this.randomColor();
        return item;
    }),
      error => console.log(error),
      () => this.createChart()
    );
  }

  randonImg() {
    return 'https://www.amcharts.com/lib/images/faces/F0' + Math.ceil(Math.random() * 5) + '.png';
  }

  randomColor() {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  }

  createChart() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': this.graphData,
      'startDuration': 1,
      'graphs': [{
        'balloonText': '<span style=\'font-size:13px;\'>[[category]]: <b>[[value]]</b></span>',
        'bulletOffset': 10,
        'bulletSize': 52,
        'colorField': 'color',
        'cornerRadiusTop': 8,
        'customBulletField': 'bullet',
        'fillAlphas': 0.8,
        'lineAlpha': 0,
        'type': 'column',
        'valueField': 'total_revenue'
      }],
      'marginTop': 0,
      'marginRight': 0,
      'marginLeft': 0,
      'marginBottom': 0,
      'autoMargins': false,
      'categoryField': 'username',
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'inside': true,
        'tickLength': 0
      },
      'export': {
        'enabled': true
      }
    });

  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
