import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSaleGraphComponent } from './weather-sale-graph.component';

describe('WeatherSaleGraphComponent', () => {
  let component: WeatherSaleGraphComponent;
  let fixture: ComponentFixture<WeatherSaleGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSaleGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSaleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
