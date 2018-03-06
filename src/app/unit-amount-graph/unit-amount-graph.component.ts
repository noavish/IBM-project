import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AmChartsService, AmChart} from '@amcharts/amcharts3-angular';
import {SalesService} from '../services/sales.service';

@Component({
  selector: 'app-unit-amount-graph',
  templateUrl: './unit-amount-graph.component.html',
  styleUrls: ['./unit-amount-graph.component.css']
})
export class UnitAmountGraphComponent implements OnInit {
  private data: any[];
  private newdata: { date: string; value: number }[];

  constructor(private AmCharts: AmChartsService, private salesService: SalesService) { }

  private chart: AmChart;
  option: number;


  ngOnInit() {
    this.salesService.getSalesByDate().subscribe(data => {
      this.data = data;
    },
      (error2 => console.log(error2)),
      () => this.createGraph()
      );



  }

  getSalesbyUser() {
    this.salesService.getSalesByPerson(this.option).subscribe(data => {
      this.newdata = data;
    },
      (err) => console.log(err),
      () => {
      this.chart.dataProvider = this.newdata;
      this.chart.validateData();
      });
  }

   createGraph() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'patterns',
      'mouseWheelZoomEnabled': true,
      'marginRight': 40,
      'marginLeft': 40,
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0,
      },
      'synchronizeGrid': true,
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth': true
      }],
      'graphs': [{
        'id': 'g1',
        'type': 'smoothedLine',
        'balloon': {
          'drop': true,
          'adjustBorderColor': false,
          'color': '#ffffff',
        },
        'bullet': 'square',
        'bulletBorderAlpha': 1,
        'bulletColor': '#455a64',
        'bulletSize': 5,
        'hideBulletsCount': 50,
        'lineThickness': 2,
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
      }],
      'chartScrollbar': {
        'graph': 'g1',
        'oppositeAxis': false,
        'offset': 30,
        'scrollbarHeight': 80,
        'backgroundAlpha': 0,
        'selectedBackgroundAlpha': 0.1,
        'selectedBackgroundColor': '#888888',
        'graphFillAlpha': 0,
        'graphLineAlpha': 0.5,
        'selectedGraphFillAlpha': 0,
        'selectedGraphLineAlpha': 1,
        'autoGridCount': true,
        'color': '#AAAAAA',
      },
      'chartCursor': {
        'pan': true,
        'valueZoomable': true,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'cursorAlpha': 1,
        'cursorColor': '#455a64',
        'limitToGraph': 'g1',
        'valueLineAlpha': 0.2,
      },
      'valueScrollbar': {
        'oppositeAxis': false,
        'offset': 50,
        'scrollbarHeight': 10
      },
      'categoryField': 'date',
      'categoryAxis': {
        'parseDates': true,
        'dashLength': 1,
        'minorGridEnabled': true
      },
      'export': {
        'enabled': true
      },
      'dataProvider': this.data


    });

    this.AmCharts.addListener(this.chart, 'rendered', () => {
      this.chart.zoomToIndexes(this.chart.dataProvider.length - 2, this.chart.dataProvider.length - 1);
    });
    this.AmCharts.addListener(this.chart, 'dataUpdated', () => {
      console.log(this.chart);
    });
  }

}
