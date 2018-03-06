import {Component, OnInit} from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { SalesService } from '../services/sales.service';


@Component({
  selector: 'app-map-with-pie',
  templateUrl: './map-with-pie.component.html',
  styleUrls: ['./map-with-pie.component.css']
})
export class MapWithPieComponent implements OnInit {
  private map: AmChart;
  latlong: any = {};
  mapData: any[];
  constructor(private AmCharts: AmChartsService, private salesService: SalesService) {}

  ngOnInit() {
    this.salesService.getSalesSums().subscribe(
      data => {
        this.mapData = data.map((item, index) => {
          item.country_code = data[index].country_code;
          item.country = data[index].country;
          item.value = data[index].value;
          item.color = '#d8854f';
          return item;
        });
      },
      error => console.log(error),
      () => this.createGraph()
    );

    this.latlong['AD'] = {'latitude': 42.5, 'longitude': 1.5};
    this.latlong['AE'] = {'latitude': 24, 'longitude': 54};
    this.latlong['AF'] = {'latitude': 33, 'longitude': 65};
    this.latlong['AG'] = {'latitude': 17.05, 'longitude': -61.8};
    this.latlong['AI'] = {'latitude': 18.25, 'longitude': -63.1667};
    this.latlong['AL'] = {'latitude': 41, 'longitude': 20};
    this.latlong['AM'] = {'latitude': 40, 'longitude': 45};
    this.latlong['AN'] = {'latitude': 12.25, 'longitude': -68.75};
    this.latlong['AO'] = {'latitude': -12.5, 'longitude': 18.5};
    this.latlong['AP'] = {'latitude': 35, 'longitude': 105};
    this.latlong['AQ'] = {'latitude': -90, 'longitude': 0};
    this.latlong['AR'] = {'latitude': -34, 'longitude': -64};
    this.latlong['AS'] = {'latitude': -14.3333, 'longitude': -170};
    this.latlong['AT'] = {'latitude': 47.3333, 'longitude': 13.3333};
    this.latlong['AU'] = {'latitude': -27, 'longitude': 133};
    this.latlong['AW'] = {'latitude': 12.5, 'longitude': -69.9667};
    this.latlong['AZ'] = {'latitude': 40.5, 'longitude': 47.5};
    this.latlong['BA'] = {'latitude': 44, 'longitude': 18};
    this.latlong['BB'] = {'latitude': 13.1667, 'longitude': -59.5333};
    this.latlong['BD'] = {'latitude': 24, 'longitude': 90};
    this.latlong['BE'] = {'latitude': 50.8333, 'longitude': 4};
    this.latlong['BF'] = {'latitude': 13, 'longitude': -2};
    this.latlong['BG'] = {'latitude': 43, 'longitude': 25};
    this.latlong['BH'] = {'latitude': 26, 'longitude': 50.55};
    this.latlong['BI'] = {'latitude': -3.5, 'longitude': 30};
    this.latlong['BJ'] = {'latitude': 9.5, 'longitude': 2.25};
    this.latlong['BM'] = {'latitude': 32.3333, 'longitude': -64.75};
    this.latlong['BN'] = {'latitude': 4.5, 'longitude': 114.6667};
    this.latlong['BO'] = {'latitude': -17, 'longitude': -65};
    this.latlong['BR'] = {'latitude': -10, 'longitude': -55};
    this.latlong['BS'] = {'latitude': 24.25, 'longitude': -76};
    this.latlong['BT'] = {'latitude': 27.5, 'longitude': 90.5};
    this.latlong['BV'] = {'latitude': -54.4333, 'longitude': 3.4};
    this.latlong['BW'] = {'latitude': -22, 'longitude': 24};
    this.latlong['BY'] = {'latitude': 53, 'longitude': 28};
    this.latlong['BZ'] = {'latitude': 17.25, 'longitude': -88.75};
    this.latlong['CA'] = {'latitude': 54, 'longitude': -100};
    this.latlong['CC'] = {'latitude': -12.5, 'longitude': 96.8333};
    this.latlong['CD'] = {'latitude': 0, 'longitude': 25};
    this.latlong['CF'] = {'latitude': 7, 'longitude': 21};
    this.latlong['CG'] = {'latitude': -1, 'longitude': 15};
    this.latlong['CH'] = {'latitude': 47, 'longitude': 8};
    this.latlong['CI'] = {'latitude': 8, 'longitude': -5};
    this.latlong['CK'] = {'latitude': -21.2333, 'longitude': -159.7667};
    this.latlong['CL'] = {'latitude': -30, 'longitude': -71};
    this.latlong['CM'] = {'latitude': 6, 'longitude': 12};
    this.latlong['CN'] = {'latitude': 35, 'longitude': 105};
    this.latlong['CO'] = {'latitude': 4, 'longitude': -72};
    this.latlong['CR'] = {'latitude': 10, 'longitude': -84};
    this.latlong['CU'] = {'latitude': 21.5, 'longitude': -80};
    this.latlong['CV'] = {'latitude': 16, 'longitude': -24};
    this.latlong['CX'] = {'latitude': -10.5, 'longitude': 105.6667};
    this.latlong['CY'] = {'latitude': 35, 'longitude': 33};
    this.latlong['CZ'] = {'latitude': 49.75, 'longitude': 15.5};
    this.latlong['DE'] = {'latitude': 51, 'longitude': 9};
    this.latlong['DJ'] = {'latitude': 11.5, 'longitude': 43};
    this.latlong['DK'] = {'latitude': 56, 'longitude': 10};
    this.latlong['DM'] = {'latitude': 15.4167, 'longitude': -61.3333};
    this.latlong['DO'] = {'latitude': 19, 'longitude': -70.6667};
    this.latlong['DZ'] = {'latitude': 28, 'longitude': 3};
    this.latlong['EC'] = {'latitude': -2, 'longitude': -77.5};
    this.latlong['EE'] = {'latitude': 59, 'longitude': 26};
    this.latlong['EG'] = {'latitude': 27, 'longitude': 30};
    this.latlong['EH'] = {'latitude': 24.5, 'longitude': -13};
    this.latlong['ER'] = {'latitude': 15, 'longitude': 39};
    this.latlong['ES'] = {'latitude': 40, 'longitude': -4};
    this.latlong['ET'] = {'latitude': 8, 'longitude': 38};
    this.latlong['EU'] = {'latitude': 47, 'longitude': 8};
    this.latlong['FI'] = {'latitude': 62, 'longitude': 26};
    this.latlong['FJ'] = {'latitude': -18, 'longitude': 175};
    this.latlong['FK'] = {'latitude': -51.75, 'longitude': -59};
    this.latlong['FM'] = {'latitude': 6.9167, 'longitude': 158.25};
    this.latlong['FO'] = {'latitude': 62, 'longitude': -7};
    this.latlong['FR'] = {'latitude': 46, 'longitude': 2};
    this.latlong['GA'] = {'latitude': -1, 'longitude': 11.75};
    this.latlong['GB'] = {'latitude': 54, 'longitude': -2};
    this.latlong['GD'] = {'latitude': 12.1167, 'longitude': -61.6667};
    this.latlong['GE'] = {'latitude': 42, 'longitude': 43.5};
    this.latlong['GF'] = {'latitude': 4, 'longitude': -53};
    this.latlong['GH'] = {'latitude': 8, 'longitude': -2};
    this.latlong['GI'] = {'latitude': 36.1833, 'longitude': -5.3667};
    this.latlong['GL'] = {'latitude': 72, 'longitude': -40};
    this.latlong['GM'] = {'latitude': 13.4667, 'longitude': -16.5667};
    this.latlong['GN'] = {'latitude': 11, 'longitude': -10};
    this.latlong['GP'] = {'latitude': 16.25, 'longitude': -61.5833};
    this.latlong['GQ'] = {'latitude': 2, 'longitude': 10};
    this.latlong['GR'] = {'latitude': 39, 'longitude': 22};
    this.latlong['GS'] = {'latitude': -54.5, 'longitude': -37};
    this.latlong['GT'] = {'latitude': 15.5, 'longitude': -90.25};
    this.latlong['GU'] = {'latitude': 13.4667, 'longitude': 144.7833};
    this.latlong['GW'] = {'latitude': 12, 'longitude': -15};
    this.latlong['GY'] = {'latitude': 5, 'longitude': -59};
    this.latlong['HK'] = {'latitude': 22.25, 'longitude': 114.1667};
    this.latlong['HM'] = {'latitude': -53.1, 'longitude': 72.5167};
    this.latlong['HN'] = {'latitude': 15, 'longitude': -86.5};
    this.latlong['HR'] = {'latitude': 45.1667, 'longitude': 15.5};
    this.latlong['HT'] = {'latitude': 19, 'longitude': -72.4167};
    this.latlong['HU'] = {'latitude': 47, 'longitude': 20};
    this.latlong['ID'] = {'latitude': -5, 'longitude': 120};
    this.latlong['IE'] = {'latitude': 53, 'longitude': -8};
    this.latlong['IL'] = {'latitude': 31.5, 'longitude': 34.75};
    this.latlong['IN'] = {'latitude': 20, 'longitude': 77};
    this.latlong['IO'] = {'latitude': -6, 'longitude': 71.5};
    this.latlong['IQ'] = {'latitude': 33, 'longitude': 44};
    this.latlong['IR'] = {'latitude': 32, 'longitude': 53};
    this.latlong['IS'] = {'latitude': 65, 'longitude': -18};
    this.latlong['IT'] = {'latitude': 42.8333, 'longitude': 12.8333};
    this.latlong['JM'] = {'latitude': 18.25, 'longitude': -77.5};
    this.latlong['JO'] = {'latitude': 31, 'longitude': 36};
    this.latlong['JP'] = {'latitude': 36, 'longitude': 138};
    this.latlong['KE'] = {'latitude': 1, 'longitude': 38};
    this.latlong['KG'] = {'latitude': 41, 'longitude': 75};
    this.latlong['KH'] = {'latitude': 13, 'longitude': 105};
    this.latlong['KI'] = {'latitude': 1.4167, 'longitude': 173};
    this.latlong['KM'] = {'latitude': -12.1667, 'longitude': 44.25};
    this.latlong['KN'] = {'latitude': 17.3333, 'longitude': -62.75};
    this.latlong['KP'] = {'latitude': 40, 'longitude': 127};
    this.latlong['KR'] = {'latitude': 37, 'longitude': 127.5};
    this.latlong['KW'] = {'latitude': 29.3375, 'longitude': 47.6581};
    this.latlong['KY'] = {'latitude': 19.5, 'longitude': -80.5};
    this.latlong['KZ'] = {'latitude': 48, 'longitude': 68};
    this.latlong['LA'] = {'latitude': 18, 'longitude': 105};
    this.latlong['LB'] = {'latitude': 33.8333, 'longitude': 35.8333};
    this.latlong['LC'] = {'latitude': 13.8833, 'longitude': -61.1333};
    this.latlong['LI'] = {'latitude': 47.1667, 'longitude': 9.5333};
    this.latlong['LK'] = {'latitude': 7, 'longitude': 81};
    this.latlong['LR'] = {'latitude': 6.5, 'longitude': -9.5};
    this.latlong['LS'] = {'latitude': -29.5, 'longitude': 28.5};
    this.latlong['LT'] = {'latitude': 55, 'longitude': 24};
    this.latlong['LU'] = {'latitude': 49.75, 'longitude': 6};
    this.latlong['LV'] = {'latitude': 57, 'longitude': 25};
    this.latlong['LY'] = {'latitude': 25, 'longitude': 17};
    this.latlong['MA'] = {'latitude': 32, 'longitude': -5};
    this.latlong['MC'] = {'latitude': 43.7333, 'longitude': 7.4};
    this.latlong['MD'] = {'latitude': 47, 'longitude': 29};
    this.latlong['ME'] = {'latitude': 42.5, 'longitude': 19.4};
    this.latlong['MG'] = {'latitude': -20, 'longitude': 47};
    this.latlong['MH'] = {'latitude': 9, 'longitude': 168};
    this.latlong['MK'] = {'latitude': 41.8333, 'longitude': 22};
    this.latlong['ML'] = {'latitude': 17, 'longitude': -4};
    this.latlong['MM'] = {'latitude': 22, 'longitude': 98};
    this.latlong['MN'] = {'latitude': 46, 'longitude': 105};
    this.latlong['MO'] = {'latitude': 22.1667, 'longitude': 113.55};
    this.latlong['MP'] = {'latitude': 15.2, 'longitude': 145.75};
    this.latlong['MQ'] = {'latitude': 14.6667, 'longitude': -61};
    this.latlong['MR'] = {'latitude': 20, 'longitude': -12};
    this.latlong['MS'] = {'latitude': 16.75, 'longitude': -62.2};
    this.latlong['MT'] = {'latitude': 35.8333, 'longitude': 14.5833};
    this.latlong['MU'] = {'latitude': -20.2833, 'longitude': 57.55};
    this.latlong['MV'] = {'latitude': 3.25, 'longitude': 73};
    this.latlong['MW'] = {'latitude': -13.5, 'longitude': 34};
    this.latlong['MX'] = {'latitude': 23, 'longitude': -102};
    this.latlong['MY'] = {'latitude': 2.5, 'longitude': 112.5};
    this.latlong['MZ'] = {'latitude': -18.25, 'longitude': 35};
    this.latlong['NA'] = {'latitude': -22, 'longitude': 17};
    this.latlong['NC'] = {'latitude': -21.5, 'longitude': 165.5};
    this.latlong['NE'] = {'latitude': 16, 'longitude': 8};
    this.latlong['NF'] = {'latitude': -29.0333, 'longitude': 167.95};
    this.latlong['NG'] = {'latitude': 10, 'longitude': 8};
    this.latlong['NI'] = {'latitude': 13, 'longitude': -85};
    this.latlong['NL'] = {'latitude': 52.5, 'longitude': 5.75};
    this.latlong['NO'] = {'latitude': 62, 'longitude': 10};
    this.latlong['NP'] = {'latitude': 28, 'longitude': 84};
    this.latlong['NR'] = {'latitude': -0.5333, 'longitude': 166.9167};
    this.latlong['NU'] = {'latitude': -19.0333, 'longitude': -169.8667};
    this.latlong['NZ'] = {'latitude': -41, 'longitude': 174};
    this.latlong['OM'] = {'latitude': 21, 'longitude': 57};
    this.latlong['PA'] = {'latitude': 9, 'longitude': -80};
    this.latlong['PE'] = {'latitude': -10, 'longitude': -76};
    this.latlong['PF'] = {'latitude': -15, 'longitude': -140};
    this.latlong['PG'] = {'latitude': -6, 'longitude': 147};
    this.latlong['PH'] = {'latitude': 13, 'longitude': 122};
    this.latlong['PK'] = {'latitude': 30, 'longitude': 70};
    this.latlong['PL'] = {'latitude': 52, 'longitude': 20};
    this.latlong['PM'] = {'latitude': 46.8333, 'longitude': -56.3333};
    this.latlong['PR'] = {'latitude': 18.25, 'longitude': -66.5};
    this.latlong['PS'] = {'latitude': 32, 'longitude': 35.25};
    this.latlong['PT'] = {'latitude': 39.5, 'longitude': -8};
    this.latlong['PW'] = {'latitude': 7.5, 'longitude': 134.5};
    this.latlong['PY'] = {'latitude': -23, 'longitude': -58};
    this.latlong['QA'] = {'latitude': 25.5, 'longitude': 51.25};
    this.latlong['RE'] = {'latitude': -21.1, 'longitude': 55.6};
    this.latlong['RO'] = {'latitude': 46, 'longitude': 25};
    this.latlong['RS'] = {'latitude': 44, 'longitude': 21};
    this.latlong['RU'] = {'latitude': 60, 'longitude': 100};
    this.latlong['RW'] = {'latitude': -2, 'longitude': 30};
    this.latlong['SA'] = {'latitude': 25, 'longitude': 45};
    this.latlong['SB'] = {'latitude': -8, 'longitude': 159};
    this.latlong['SC'] = {'latitude': -4.5833, 'longitude': 55.6667};
    this.latlong['SD'] = {'latitude': 15, 'longitude': 30};
    this.latlong['SE'] = {'latitude': 62, 'longitude': 15};
    this.latlong['SG'] = {'latitude': 1.3667, 'longitude': 103.8};
    this.latlong['SH'] = {'latitude': -15.9333, 'longitude': -5.7};
    this.latlong['SI'] = {'latitude': 46, 'longitude': 15};
    this.latlong['SJ'] = {'latitude': 78, 'longitude': 20};
    this.latlong['SK'] = {'latitude': 48.6667, 'longitude': 19.5};
    this.latlong['SL'] = {'latitude': 8.5, 'longitude': -11.5};
    this.latlong['SM'] = {'latitude': 43.7667, 'longitude': 12.4167};
    this.latlong['SN'] = {'latitude': 14, 'longitude': -14};
    this.latlong['SO'] = {'latitude': 10, 'longitude': 49};
    this.latlong['SR'] = {'latitude': 4, 'longitude': -56};
    this.latlong['ST'] = {'latitude': 1, 'longitude': 7};
    this.latlong['SV'] = {'latitude': 13.8333, 'longitude': -88.9167};
    this.latlong['SY'] = {'latitude': 35, 'longitude': 38};
    this.latlong['SZ'] = {'latitude': -26.5, 'longitude': 31.5};
    this.latlong['TC'] = {'latitude': 21.75, 'longitude': -71.5833};
    this.latlong['TD'] = {'latitude': 15, 'longitude': 19};
    this.latlong['TF'] = {'latitude': -43, 'longitude': 67};
    this.latlong['TG'] = {'latitude': 8, 'longitude': 1.1667};
    this.latlong['TH'] = {'latitude': 15, 'longitude': 100};
    this.latlong['TJ'] = {'latitude': 39, 'longitude': 71};
    this.latlong['TK'] = {'latitude': -9, 'longitude': -172};
    this.latlong['TM'] = {'latitude': 40, 'longitude': 60};
    this.latlong['TN'] = {'latitude': 34, 'longitude': 9};
    this.latlong['TO'] = {'latitude': -20, 'longitude': -175};
    this.latlong['TR'] = {'latitude': 39, 'longitude': 35};
    this.latlong['TT'] = {'latitude': 11, 'longitude': -61};
    this.latlong['TV'] = {'latitude': -8, 'longitude': 178};
    this.latlong['TW'] = {'latitude': 23.5, 'longitude': 121};
    this.latlong['TZ'] = {'latitude': -6, 'longitude': 35};
    this.latlong['UA'] = {'latitude': 49, 'longitude': 32};
    this.latlong['UG'] = {'latitude': 1, 'longitude': 32};
    this.latlong['UM'] = {'latitude': 19.2833, 'longitude': 166.6};
    this.latlong['US'] = {'latitude': 38, 'longitude': -97};
    this.latlong['UY'] = {'latitude': -33, 'longitude': -56};
    this.latlong['UZ'] = {'latitude': 41, 'longitude': 64};
    this.latlong['VA'] = {'latitude': 41.9, 'longitude': 12.45};
    this.latlong['VC'] = {'latitude': 13.25, 'longitude': -61.2};
    this.latlong['VE'] = {'latitude': 8, 'longitude': -66};
    this.latlong['VG'] = {'latitude': 18.5, 'longitude': -64.5};
    this.latlong['VI'] = {'latitude': 18.3333, 'longitude': -64.8333};
    this.latlong['VN'] = {'latitude': 16, 'longitude': 106};
    this.latlong['VU'] = {'latitude': -16, 'longitude': 167};
    this.latlong['WF'] = {'latitude': -13.3, 'longitude': -176.2};
    this.latlong['WS'] = {'latitude': -13.5833, 'longitude': -172.3333};
    this.latlong['YE'] = {'latitude': 15, 'longitude': 48};
    this.latlong['YT'] = {'latitude': -12.8333, 'longitude': 45.1667};
    this.latlong['ZA'] = {'latitude': -29, 'longitude': 24};
    this.latlong['ZM'] = {'latitude': -15, 'longitude': 30};
    this.latlong['ZW'] = {'latitude': -20, 'longitude': 30};
  }

  createGraph() {
    // get min and max values
    const minBulletSize = 10;
    const maxBulletSize = 30;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < this.mapData.length; i++) {
      const value = this.mapData[i].value;
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
    }

// it's better to use circle square to show difference between values, not a radius
    const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    const minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

// create circle for each country
    const images = [];
    for (let i = 0; i < this.mapData.length; i++) {
      const dataItem = this.mapData[i];
      const value = dataItem.value;
      // calculate size of a bubble
      let square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
      if (square < minSquare) {
        square = minSquare;
      }
      const size = Math.sqrt(square / (Math.PI * 2));
      const id = dataItem.country_code;

      images.push({
        'type': 'circle',
        'theme': 'light',

        'width': size,
        'height': size,
        'color': dataItem.color,
        'longitude': this.latlong[id].longitude,
        'latitude': this.latlong[id].latitude,
        'title': dataItem.country,
        'value': value
      });
    }

// build map
    this.map = this.AmCharts.makeChart('chartdiv', {
      'type': 'map',
      'projection': 'eckert6',
      'zoomControl': {
        'homeButtonEnabled': false
      },
      'titles': [{
        'text': '',
        'size': 14
      }, {
        'text': '',
        'size': 11
      }],
      'areasSettings': {
        'unlistedAreasColor': '#000000',
        'unlistedAreasAlpha': 0.1
      },
      'dataProvider': {
        'map': 'worldLow',
        'images': images
      },
      'export': {
        'enabled': true
      }
    });
  }
}
