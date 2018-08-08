import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validateEmail } from './email.validator';

@Component({
  selector: 'app-forms-model',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsModelComponent implements OnInit {

  userInfo: FormGroup;
  formState: string;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    // this.userInfo = this.fb.group({
    //   first: new FormControl('Jim', []),
    //   last: new FormControl('Doe', []),
    //   addresses: this.fb.array([
    //     : new FormGroup({
    //       address: new FormControl('Main Street', []),
    //       city: new FormControl('Newark', []),
    //       state: new FormControl('NJ', []),
    //       zip: new FormControl('07102', [])
    //     }),
    //     this.fb.group({
    //       address: new FormControl('Main Street', []),
    //       city: new FormControl('Newark', []),
    //       state: new FormControl('NJ', []),
    //       zip: new FormControl('07102', [])
    //     })
    //   ])
    // });
  }

  onSubmit() {
    console.log(JSON.stringify(
      this.userInfo.value, null, 2));
  }

  ngOnInit(): void {
  }

  // ngOnInit() {
  //   this.userInfo = new FormGroup({
  //     firstName: new FormControl('Jim', []),
  //     lastName: new FormControl('Doe',[Validators.required]),
  //     email: new FormControl('', [])
  //     });
  // }
  // submitForm() {
  //   console.log(this.userInfo.value);
  // }

}
