import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUsageComponent } from './stock-usage.component';

describe('StockUsageComponent', () => {
  let component: StockUsageComponent;
  let fixture: ComponentFixture<StockUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
