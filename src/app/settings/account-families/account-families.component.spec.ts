import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFamiliesComponent } from './account-families.component';

describe('AccountFamiliesComponent', () => {
  let component: AccountFamiliesComponent;
  let fixture: ComponentFixture<AccountFamiliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFamiliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
