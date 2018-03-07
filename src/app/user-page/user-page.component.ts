import { Component, EventEmitter, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { SalesService } from '../services/sales.service';
import { Product } from '../models/productModel';
import { SKU } from '../models/skuModel';
import { Sale } from '../models/saleModel';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  logSaleClicked = new EventEmitter<string|MaterializeAction>();
  revert = new EventEmitter<string|MaterializeAction>();
  sale: Sale = new Sale();
  timeStamp = new Date();
  products: Product[];
  chosenSKU: number;
  items: any[];
  channel: number = 1;
  user_id: number = 1;
  weather: number = 25;
  // location: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor( private salesService: SalesService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private authservice:AuthService ) { }

  ngOnInit() {
    // this.getAllSales();
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
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.sale.city = place.address_components.find( item => item.types[0] === 'locality' ).long_name;
          this.sale.state = place.address_components.find( item => item.types[0] === 'administrative_area_level_1' ).long_name;
          this.sale.country = place.address_components.find( item => item.types[0] === 'country' ).long_name;
          this.sale.country_code = place.address_components.find( item => item.types[0] === 'country' ).short_name;
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

  getProducts() {
    this.salesService.getProductsFromDB().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }

  getSKU() {
    this.salesService.getSKUFromDB(this.sale.product_id_fk).subscribe(
      data => this.items = data,
      error => console.log(error)
    );
  }

  openLogSale() {
    this.logSaleClicked.emit({action: 'modal', params: ['open']});
    this.getProducts();
  }

  closeLog() {
    this.logSaleClicked.emit({action: 'modal', params: ['close']});
  }

  markTaskDone() {
  }

  openRevert() {
    this.revert.emit({action: 'modal', params: ['open']});
  }

  closeRevert() {
    this.revert.emit({action: 'modal', params: ['close']});
  }

  logSale() {
    this.sale.date = this.timeStamp.toISOString().split('T')[0];
    this.sale.time = this.timeStamp.toISOString().split('T')[1].split('.')[0];
    this.sale.item_id_fk = this.items.find(item => item.product_id_fk == this.sale.product_id_fk && item.sku_id_fk == this.chosenSKU).item_id;
    this.sale.weather = this.weather;
    this.sale.user_id_fk = this.user_id;
    this.salesService.addSaleToDB(this.sale).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  // findLocation() {
  //   this.salesService.getFromAPI(this.location).subscribe(
  //     data => console.log(data),
  //     error => console.log(error)
  //   );
  // }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
