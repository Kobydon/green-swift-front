import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGeneralLedgerComponent } from './account-general-ledger.component';

describe('AccountGeneralLedgerComponent', () => {
  let component: AccountGeneralLedgerComponent;
  let fixture: ComponentFixture<AccountGeneralLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGeneralLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGeneralLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
