import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiDemoComponent } from './di-demo.component';

describe('DiDemoComponent', () => {
  let component: DiDemoComponent;
  let fixture: ComponentFixture<DiDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
