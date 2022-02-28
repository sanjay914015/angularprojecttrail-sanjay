import { TestBed } from '@angular/core/testing';

import { GetjasondataService } from './getjasondata.service';

describe('GetjasondataService', () => {
  let service: GetjasondataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetjasondataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
