import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestClientComponent } from './rest-client.component';
import { FormsModule } from '@angular/forms';

describe('RestClientComponent', () => {
  let component: RestClientComponent;
  let fixture: ComponentFixture<RestClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestClientComponent ],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
