import { TestBed } from '@angular/core/testing';

import { RoutingserviceService } from './routingservice.service';

describe('RoutingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingserviceService = TestBed.get(RoutingserviceService);
    expect(service).toBeTruthy();
  });
});
