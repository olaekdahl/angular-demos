import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpParallelComponent } from './http-parallel.component';

describe('HttpParallelComponent', () => {
  let component: HttpParallelComponent;
  let fixture: ComponentFixture<HttpParallelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpParallelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpParallelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
