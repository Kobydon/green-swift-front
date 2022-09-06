import { TestBed } from '@angular/core/testing';

import { HouseKeepingService } from './house-keeping.service';

describe('HouseKeepingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseKeepingService = TestBed.get(HouseKeepingService);
    expect(service).toBeTruthy();
  });
});
