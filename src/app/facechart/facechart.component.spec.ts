import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacechartComponent } from './facechart.component';

describe('FacechartComponent', () => {
  let component: FacechartComponent;
  let fixture: ComponentFixture<FacechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
