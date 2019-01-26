import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClientsInfoComponent } from './display-clients-info.component';

describe('DisplayClientsInfoComponent', () => {
  let component: DisplayClientsInfoComponent;
  let fixture: ComponentFixture<DisplayClientsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayClientsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClientsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
