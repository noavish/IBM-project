import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSalesTableComponent } from './user-sales-table.component';

describe('UserSalesTableComponent', () => {
  let component: UserSalesTableComponent;
  let fixture: ComponentFixture<UserSalesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSalesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
