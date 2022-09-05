import { TestBed } from '@angular/core/testing';

import { GroupReservationService } from './group-reservation.service';

describe('GroupReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupReservationService = TestBed.get(GroupReservationService);
    expect(service).toBeTruthy();
  });
});
