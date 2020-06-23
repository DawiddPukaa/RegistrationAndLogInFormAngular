import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPulseComponent } from './test-pulse.component';

describe('TestPulseComponent', () => {
  let component: TestPulseComponent;
  let fixture: ComponentFixture<TestPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
