import { TestBed } from '@angular/core/testing';

import { ClientReportService } from './client-report.service';

describe('ClientReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientReportService = TestBed.get(ClientReportService);
    expect(service).toBeTruthy();
  });
});
