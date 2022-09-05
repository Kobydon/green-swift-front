import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSettlementsComponent } from './add-settlements.component';

describe('AddSettlementsComponent', () => {
  let component: AddSettlementsComponent;
  let fixture: ComponentFixture<AddSettlementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSettlementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
