import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBooksInfoComponent } from './display-books-info.component';

describe('DisplayBooksInfoComponent', () => {
  let component: DisplayBooksInfoComponent;
  let fixture: ComponentFixture<DisplayBooksInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBooksInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBooksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
