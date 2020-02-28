import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParallelComponent } from './http-parallel.component';
import { HttpClient } from '@angular/common/http';

describe('HttpParallelComponent', () => {
  let component: HttpParallelComponent;
  let fixture: ComponentFixture<HttpParallelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpParallelComponent ],
      imports:[ HttpClientTestingModule ]
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
