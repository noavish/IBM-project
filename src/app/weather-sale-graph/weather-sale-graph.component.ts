import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { WeatherSaleService } from '../services/weather-sale.service'

// template
// var xchartData = [{
//     "date": 1,
//     "weather": 1600,
//     "sales_count": 1500
// }]

@Component({
    selector: 'app-weather-sale-graph',
    templateUrl: './weather-sale-graph.component.html',
    styleUrls: ['./weather-sale-graph.component.css']
})


export class WeatherSaleGraphComponent implements OnInit {
    private map: AmChart;
    ready: any;
    isReady: any;
    chart: any;
    chartData: any[];
    mapData: any[];
    constructor(private WeatherSaleService: WeatherSaleService,
        private AmCharts: AmChartsService) { }

    ngOnInit() {
        this.getWeatherBySale()
    }

    getWeatherBySale() {
        this.WeatherSaleService.getWeatherSales().subscribe(
            data => {
                this.mapData = data.map((item, index) => {
                    item.date = data[index].Month;
                    item.weather = data[index].weather+"00";
                    item.sales_count = data[index].sales_count;
                    return item;
                });
                console.log(this.mapData)
            },
            error => console.log(error),
            () => this.weatherChartMaker()
        );
    }
    weatherChartMaker() {
        this.map = this.AmCharts.makeChart('chartdiv6', {
            "type": "serial",
            "theme": "light",
            "fontFamily": "Lato",
            "autoMargins": true,
            "addClassNames": true,
            "zoomOutText": "",
            "defs": {
                "filter": [
                    {
                        "x": "-50%",
                        "y": "-50%",
                        "width": "200%",
                        "height": "200%",
                        "id": "blur",
                        "feGaussianBlur": {
                            "in": "SourceGraphic",
                            "stdDeviation": "50"
                        }
                    },
                    {
                        "id": "shadow",
                        "width": "150%",
                        "height": "150%",
                        "feOffset": {
                            "result": "offOut",
                            "in": "SourceAlpha",
                            "dx": "2",
                            "dy": "2"
                        },
                        "feGaussianBlur": {
                            "result": "blurOut",
                            "in": "offOut",
                            "stdDeviation": "10"
                        },
                        "feColorMatrix": {
                            "result": "blurOut",
                            "type": "matrix",
                            "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
                        },
                        "feBlend": {
                            "in": "SourceGraphic",
                            "in2": "blurOut",
                            "mode": "normal"
                        }
                    }
                ]
            },
            "fontSize": 15,
            "pathToImages": "../amcharts/images/",
            "dataProvider": this.mapData,
            "dataDateFormat": "MM",
            "marginTop": 0,
            "marginRight": 1,
            "marginLeft": 0,
            "autoMarginOffset": 5,
            "categoryField": "date",
            "categoryAxis": {
                "gridAlpha": 0.07,
                "axisColor": "#DADADA",
                "startOnAxis": true,
                "tickLength": 0,
                "parseDates": true,
                "minPeriod": "DD"
            },
            "valueAxes": [
                {
                    "ignoreAxisWidth": true,
                    "id": "g1",
                    "stackType": "regular",
                    "gridAlpha": 0.07,
                    "axisAlpha": 0,
                    "inside": true
                }
            ],
            "graphs": [
                {
                    "type": "line",
                    "title": "Weather",
                    "valueField": "weather",
                    "fillColors": [
                        "#FF3030",
                        "#003399"
                    ],
                    "lineAlpha": 0,
                    "fillAlphas": 0.8,
                    "showBalloon": false
                },
                {
                    //point
                    "id": "g3",
                    "title": "sales_count",
                    "valueField": "sales_count",
                    "lineAlpha": 0.5,
                    "lineColor": "#FFFFFF",
                    "bullet": "round",
                    "dashLength": 2,
                    "bulletBorderAlpha": 1,
                    "bulletAlpha": 1,
                    "bulletSize": 15,
                    "stackable": false,
                    "bulletColor": "#00",
                    "bulletBorderColor": "#FFFFFF",
                    "bulletBorderThickness": 3,
                    "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
                }
            ],
            "chartCursor": {
                "cursorAlpha": 1,
                "zoomable": false,
                "cursorColor": "#FFFFFF",
                "categoryBalloonColor": "#8d83c8",
                "fullWidth": true,
                "categoryBalloonDateFormat": "MM",
                "balloonPointerOrientation": "vertical"
            },
            "balloon": {
                "borderAlpha": 0,
                "fillAlpha": 0,
                "shadowAlpha": 0,
                "offsetX": 40,
                "offsetY": -50
            }
        });
    }
}
// this.AmCharts.addListener(this.chart, 'rendered', () => {
//     this.chart.zoomToIndexes(this.chart.dataProvider.length - 2, this.chart.dataProvider.length - 1);
// });
// this.AmCharts.addListener(this.chart, 'dataUpdated', () => {
//     console.log(this.chart);
// });
 