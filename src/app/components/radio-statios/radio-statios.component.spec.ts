import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioStatiosComponent } from './radio-statios.component';

describe('RadioStatiosComponent', () => {
  let component: RadioStatiosComponent;
  let fixture: ComponentFixture<RadioStatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioStatiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioStatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
