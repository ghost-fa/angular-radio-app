import { TestBed } from '@angular/core/testing';

import { RadiosService } from './radios.service';

describe('RadiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadiosService = TestBed.get(RadiosService);
    expect(service).toBeTruthy();
  });
});
