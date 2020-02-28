import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SuperBasicHttpComponent } from './super-basic-http.component';

describe('SuperBasicHttpComponent', () => {
  let component: SuperBasicHttpComponent;
  let fixture: ComponentFixture<SuperBasicHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperBasicHttpComponent ],
      imports:[ HttpClientTestingModule ]
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
