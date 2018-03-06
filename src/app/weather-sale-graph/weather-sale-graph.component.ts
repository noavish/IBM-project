import { Component, OnInit } from '@angular/core';
import { WeatherSaleService } from '../services/weather-sale.service'
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


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
    constructor(private WeatherSaleService: WeatherSaleService,
        private AmCharts: AmChartsService) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        var chartData = [{
            "date": 1,
            "weather": 1600,
            "red": 737,
            "sales_count": 1500

        }, {
            "date": 2,
            "weather": 1700,
            "red": 680,
            "sales_count": 1600
        }, {
            "date": 3,
            "weather": 2000,
            "red": 664,
            "sales_count": 670
        }, {
            "date": 4,
            "weather": 2100,
            "red": 648,
            "sales_count": 2000
        }, {
            "date": 5,
            "weather": 1500,
            "red": 637,
            "sales_count": 1300
        }, {
            "date": 6,
            "weather": 1400,
            "red": 133,
            "sales_count": 1000
        }, {
            "date": 7,
            "weather": 2100,
            "red": 621,
            "sales_count": 2000
        }, {
            "date": 8,
            "weather": 2300,
            "red": 10,
            "sales_count": 1050
        }, {
            "date": 9,
            "weather": 1900,
            "red": 232,
            "sales_count": 650
        }, {
            "date": 10,
            "weather": 1700,
            "red": 219,
            "sales_count": 780
        }, {
            "date": 11,
            "weather": 1500,
            "red": 201,
            "sales_count": 1300
        }, {
            "date": 12,
            "weather": 1100,
            "red": 85,
            "sales_count": 1200
        },];
        this.map = this.AmCharts.makeChart('chartdiv', {
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
            "dataProvider": chartData,
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
                //     // heat
                //     "id": "g2",
                //     "type": "line",
                //     "title": "Red",
                //     "valueField": "red",
                //     "lineAlpha": 0,
                //     "fillAlphas": 0.8,
                //     "lineColor": "#fc4e4e",
                //     "showBalloon": false
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

        // we zoom chart in order to have better blur (form side to side)
        this.chart.addListener("dataUpdated", zoomChart);

        function zoomChart() {
            this.chart.zoomToIndexes(1, chartData.length - 2);
        }
    }
}