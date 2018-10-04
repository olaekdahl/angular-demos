import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperBasicHttpComponent } from './super-basic-http.component';

describe('SuperBasicHttpComponent', () => {
  let component: SuperBasicHttpComponent;
  let fixture: ComponentFixture<SuperBasicHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperBasicHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperBasicHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
