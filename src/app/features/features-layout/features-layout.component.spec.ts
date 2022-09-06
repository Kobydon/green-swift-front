import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesLayoutComponent } from './features-layout.component';

describe('FeaturesLayoutComponent', () => {
  let component: FeaturesLayoutComponent;
  let fixture: ComponentFixture<FeaturesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
