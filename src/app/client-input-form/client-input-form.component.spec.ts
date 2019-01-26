import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInputFormComponent } from './client-input-form.component';

describe('ClientInputFormComponent', () => {
  let component: ClientInputFormComponent;
  let fixture: ComponentFixture<ClientInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
