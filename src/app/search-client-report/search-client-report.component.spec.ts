import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClientReportComponent } from './search-client-report.component';

describe('SearchClientReportComponent', () => {
  let component: SearchClientReportComponent;
  let fixture: ComponentFixture<SearchClientReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClientReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
