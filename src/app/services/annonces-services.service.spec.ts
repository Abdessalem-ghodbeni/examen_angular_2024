import { TestBed } from '@angular/core/testing';

import { AnnoncesServicesService } from './annonces-services.service';

describe('AnnoncesServicesService', () => {
  let service: AnnoncesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnoncesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
