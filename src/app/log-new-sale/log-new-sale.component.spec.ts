import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNewSaleComponent } from './log-new-sale.component';

describe('LogNewSaleComponent', () => {
  let component: LogNewSaleComponent;
  let fixture: ComponentFixture<LogNewSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogNewSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNewSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
