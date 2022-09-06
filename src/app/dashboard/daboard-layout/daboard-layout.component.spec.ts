import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaboardLayoutComponent } from './daboard-layout.component';

describe('DaboardLayoutComponent', () => {
  let component: DaboardLayoutComponent;
  let fixture: ComponentFixture<DaboardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaboardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
