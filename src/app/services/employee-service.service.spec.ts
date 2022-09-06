import { TestBed } from '@angular/core/testing';

import { EmployeeService } from '../services/employee-service.service';

describe('EmployeeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
