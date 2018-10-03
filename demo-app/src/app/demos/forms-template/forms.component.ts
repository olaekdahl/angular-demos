import { Component, OnInit } from '@angular/core';
import { UserModel } from './user';
import { Person } from './Person'

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsTemplateComponent implements OnInit {
  name: string;
  country: string;
  remember: boolean = true;
  person: Person = new Person();
  constructor(  ) { }

  ngOnInit() {
    //this.name = 'Ola';
  }
  onSubmit(form) {
    console.log(`name: ${this.person.name}`)
    console.log(`country: ${this.person.country}`)
    console.log(`remember: ${this.person.remember}`)
    // console.log("Submitted:" +
    //     JSON.stringify(this.person));
      //JSON.stringify(form.form.value, null, 2));
  }
}
