import { TestBed } from '@angular/core/testing';

import { BookReportService } from './book-report.service';

describe('BookReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookReportService = TestBed.get(BookReportService);
    expect(service).toBeTruthy();
  });
});
