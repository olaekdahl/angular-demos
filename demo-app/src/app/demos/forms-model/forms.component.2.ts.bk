import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateEmail } from './email.validator';

@Component({
  selector: 'app-forms-model',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsModelComponent implements OnInit {

  userInfo: FormGroup;
  formState: string;
  constructor() { }

  onSubmit() {
    console.log(JSON.stringify(
      this.userInfo.value, null, 2));
  }

  ngOnInit() {
    this.userInfo = new FormGroup({
      firstName: new FormControl('Jim', []),
      lastName: new FormControl('Doe', [Validators.required]),
      email: new FormControl('', [validateEmail])
    });
  }
  submitForm() {
    console.log(this.userInfo.value);
  }

}