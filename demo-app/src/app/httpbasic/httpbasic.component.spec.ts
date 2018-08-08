import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpbasicComponent } from './httpbasic.component';

describe('HttpbasicComponent', () => {
  let component: HttpbasicComponent;
  let fixture: ComponentFixture<HttpbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
