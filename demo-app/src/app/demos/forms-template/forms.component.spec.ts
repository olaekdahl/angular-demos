import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateComponent } from './forms.component';
import { FormsModule } from '@angular/forms';

describe('FormsComponent', () => {
  let component: FormsTemplateComponent;
  let fixture: ComponentFixture<FormsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTemplateComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
