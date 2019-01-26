import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInputFormComponent } from './category-input-form.component';

describe('CategoryInputFormComponent', () => {
  let component: CategoryInputFormComponent;
  let fixture: ComponentFixture<CategoryInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
