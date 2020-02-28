import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooComponent } from './foo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test test function', () => {
    expect(component.test(2,2)).toBe(4);
  });
});
