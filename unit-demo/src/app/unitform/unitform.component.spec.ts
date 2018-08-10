// https://github.com/SantiagoGdaR/angular4-unit-test

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { UnitformComponent } from './unitform.component';

describe('UnitformComponent', () => {
  let comp: UnitformComponent;
  let fixture: ComponentFixture<UnitformComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UnitformComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UnitformComponent);

      comp = fixture.componentInstance; // UnitformComponent test instance
    });
  }));

 it(`form should be invalid`, async(() => {
    comp.contactForm.controls['email'].setValue('aa');
    comp.contactForm.controls['name'].setValue('a');
    comp.contactForm.controls['text'].setValue('a');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    comp.contactForm.controls['email'].setValue('asd@test.com');
    comp.contactForm.controls['name'].setValue('aada');
    comp.contactForm.controls['text'].setValue('text');
    expect(comp.contactForm.valid).toBeTruthy();
  }));

  // it(`should call the onSubmit method`, async(() => {
  //   spyOn(comp, 'onSubmit');
  //   // let button : DebugElement =
  //   //   fixture.debugElement.query(By.css("button"));

  //   // button.triggerEventHandler("onSubmit", null);
  //   // fixture.detectChanges();
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(comp.onSubmit).toHaveBeenCalled();
  // }));
});