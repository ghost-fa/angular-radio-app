import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosChanellComponent } from './radios-chanell.component';

describe('RadiosChanellComponent', () => {
  let component: RadiosChanellComponent;
  let fixture: ComponentFixture<RadiosChanellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiosChanellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosChanellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
