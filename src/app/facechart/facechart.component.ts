import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-facechart',
  templateUrl: './facechart.component.html',
  styleUrls: ['./facechart.component.css'],
  template: `<div id="chartdiv" [style.width.%]="100" [style.height.px]="500"></div>`
})
export class FacechartComponent implements AfterViewInit, OnDestroy {

  private chart: AmChart;

  constructor(private AmCharts: AmChartsService) {}

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "light",
      "dataProvider": [{
          "name": "Noa",
          "points": 35654,
          "color": "#7F8DA9",
          "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      }, {
          "name": "Dor",
          "points": 65456,
          "color": "#FEC514",
          "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
      }, {
          "name": "Shirly",
          "points": 45724,
          "color": "#DB4C3C",
          "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
      }, {
          "name": "Shmuel",
          "points": 23654,
          "color": "#DAF0FD",
          "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
      }],
      "valueAxes": [{
          "maximum": 80000,
          "minimum": 0,
          "axisAlpha": 0,
          "dashLength": 4,
          "position": "left"
      }],
      "startDuration": 1,
      "graphs": [{
          "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
          "bulletOffset": 10,
          "bulletSize": 52,
          "colorField": "color",
          "cornerRadiusTop": 8,
          "customBulletField": "bullet",
          "fillAlphas": 0.8,
          "lineAlpha": 0,
          "type": "column",
          "valueField": "points"
      }],
      "marginTop": 0,
      "marginRight": 0,
      "marginLeft": 0,
      "marginBottom": 0,
      "autoMargins": false,
      "categoryField": "name",
      "categoryAxis": {
          "axisAlpha": 0,
          "gridAlpha": 0,
          "inside": true,
          "tickLength": 0
      },
      "export": {
        "enabled": true
       }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}