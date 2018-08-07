import { Component, OnInit } from '@angular/core';
import { UserModel } from './user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  name: string;
  country: string;
  remember: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log("Submitted:" +
      JSON.stringify(form.form.value, null, 2));
  }
}
