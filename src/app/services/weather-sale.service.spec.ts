import { TestBed, inject } from '@angular/core/testing';

import { WeatherSaleService } from './weather-sale.service';

describe('WeatherSaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherSaleService]
    });
  });

  it('should be created', inject([WeatherSaleService], (service: WeatherSaleService) => {
    expect(service).toBeTruthy();
  }));
});
