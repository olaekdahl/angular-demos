import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModelComponent } from './forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('FormsComponent', () => {
  let component: FormsModelComponent;
  let fixture: ComponentFixture<FormsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsModelComponent ],
      imports:[ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
