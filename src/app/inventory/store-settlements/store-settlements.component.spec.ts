import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSettlementsComponent } from './store-settlements.component';

describe('StoreSettlementsComponent', () => {
  let component: StoreSettlementsComponent;
  let fixture: ComponentFixture<StoreSettlementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSettlementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
