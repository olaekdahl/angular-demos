import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-model',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsModelComponent implements OnInit {

  userInfo: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userInfo = this.fb.group({
      firstName: 'John', // <--- the FormControl called "first"
      lastName: ['Doe', Validators.required] // parameter array
    });
  }
  ngOnInit(): void {
  }

  // ngOnInit() {
  //   this.userInfo = new FormGroup({
  //     firstName: new FormControl('Jim', []),
  //     lastName: new FormControl('Doe',[Validators.required])
  //     });
  // }
  submitForm() {
    console.log(this.userInfo.value);
  }

}
