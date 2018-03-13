import {Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AgmMap, MapsAPILoader} from '@agm/core';
import {Product} from '../models/productModel';
import {Sale} from '../models/saleModel';
import {WeatherService} from '../services/weather.service';
import {SalesService} from '../services/sales.service';
import { } from 'googlemaps';


@Component({
  selector: 'app-log-new-sale',
  templateUrl: './log-new-sale.component.html',
  styleUrls: ['./log-new-sale.component.css']
})
export class LogNewSaleComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  sale: Sale = new Sale();
  timeStamp = new Date();
  products: Product[];
  chosenSKU: number;
  items: any[];
  channel = 1;
  @Input() user: any;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  @ViewChild('pickMap')
  pickMap: AgmMap;
  @Output() closeLogClicked: EventEmitter<any> = new EventEmitter();

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private weatherService: WeatherService, private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.mapResize.subscribe(data => {
      this.resizeMap();
    });
    this.getProducts();
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.sale.city = place.address_components.find( item => item.types[0] === 'locality' ).long_name;
          this.sale.state = place.address_components.find( item => item.types[0] === 'administrative_area_level_1' ).long_name;
          this.sale.country = place.address_components.find( item => item.types[0] === 'country' ).long_name;
          this.sale.country_code = place.address_components.find( item => item.types[0] === 'country' ).short_name;

          // search weather by city
          this.weatherService.getCityWeatherFromAPI(this.sale.city).subscribe(
            data => this.sale.weather = data.main.temp,
            error => console.log(error)
          );

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  closeLogEmit() {
    this.closeLogClicked.emit();
  }

  getProducts() {
    this.salesService.getProductsFromDB().subscribe(
      data => this.products = data,
      error => console.log(error),
    );
  }

  getSKU() {
    this.salesService.getSKUFromDB(this.sale.product_id_fk).subscribe(
      data => this.items = data,
      error => console.log(error)
    );
  }

  resizeMap() {
    this.pickMap.triggerResize();
  }



  logSale() {
    this.sale.date = this.timeStamp.toISOString().split('T')[0];
    this.sale.time = this.timeStamp.toISOString().split('T')[1].split('.')[0];
    this.sale.item_id_fk = this.items.find(item => item.product_id_fk == this.sale.product_id_fk && item.sku_id_fk == this.chosenSKU).item_id;
    this.sale.user_id_fk = this.user.user_id;
    console.log(this.sale);
    this.salesService.addSaleToDB(this.sale).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.salesService.newSaleLogged.emit()
    );
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
