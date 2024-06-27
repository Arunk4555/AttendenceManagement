import { TestBed } from '@angular/core/testing';

import { UserauthGarudService } from './userauth-garud.service';

describe('UserauthGarudService', () => {
  let service: UserauthGarudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserauthGarudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
