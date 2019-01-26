import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCategoryInfosComponent } from './display-category-infos.component';

describe('DisplayCategoryInfosComponent', () => {
  let component: DisplayCategoryInfosComponent;
  let fixture: ComponentFixture<DisplayCategoryInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCategoryInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCategoryInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
