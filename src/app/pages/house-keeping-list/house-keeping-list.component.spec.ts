import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseKeepingListComponent } from './house-keeping-list.component';

describe('HouseKeepingListComponent', () => {
  let component: HouseKeepingListComponent;
  let fixture: ComponentFixture<HouseKeepingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseKeepingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseKeepingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
