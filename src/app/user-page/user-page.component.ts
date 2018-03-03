import { Component, EventEmitter, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { SalesService } from '../sales.service';
import { Product } from '../productModel';
import { SKU } from '../skuModel';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  logSaleClicked = new EventEmitter<string|MaterializeAction>();
  orderInventory = new EventEmitter<string|MaterializeAction>();
  revert = new EventEmitter<string|MaterializeAction>();
  timeStamp = new Date();
  products: Product[];
  chosenProduct: string;
  SKUs: SKU[];
  // location: string;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor( private salesService: SalesService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone ) { }

  ngOnInit() {
    // this.getAllSales();
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          const city = place.address_components.find( item => item.types[0] === 'locality' ).long_name;
          const state = place.address_components.find( item => item.types[0] === 'administrative_area_level_1' ).long_name;
          const country = place.address_components.find( item => item.types[0] === 'country' ).long_name;
          console.log(city, state, country);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  // getAllSales() {
  //   this.salesService.getSales().subscribe(
  //     data => console.log(data),
  //     error => console.log(error)
  //   );
  // }

  getProducts() {
    this.salesService.getProductsFromDB().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }

  getSKU() {
    this.salesService.getSKUFromDB(this.chosenProduct).subscribe(
      data => this.SKUs = data,
      error => console.log(error)
    );
  }

  openLogSale() {
    this.logSaleClicked.emit({action: 'modal', params: ['open']});
    this.getProducts();
  }

  openOrderInventory() {
    this.orderInventory.emit({action: 'modal', params: ['open']});
  }

  closeLog() {
    this.logSaleClicked.emit({action: 'modal', params: ['close']});
  }

  closeOrder() {
    this.orderInventory.emit({action: 'modal', params: ['close']});
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
    const date = this.timeStamp.toISOString().split('T')[0];
    const timeInGMT = this.timeStamp.toISOString().split('T')[1].split('.')[0];
    console.log(date, timeInGMT);
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
