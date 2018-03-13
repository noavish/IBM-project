import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithPieComponent } from './map-with-pie.component';

describe('MapWithPieComponent', () => {
  let component: MapWithPieComponent;
  let fixture: ComponentFixture<MapWithPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapWithPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapWithPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
