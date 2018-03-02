import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitAmountGraphComponent } from './unit-amount-graph.component';

describe('UnitAmountGraphComponent', () => {
  let component: UnitAmountGraphComponent;
  let fixture: ComponentFixture<UnitAmountGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitAmountGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitAmountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
