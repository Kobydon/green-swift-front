import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUsagesComponent } from './store-usages.component';

describe('StoreUsagesComponent', () => {
  let component: StoreUsagesComponent;
  let fixture: ComponentFixture<StoreUsagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreUsagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreUsagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
