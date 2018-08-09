// https://stackoverflow.com/questions/47711544/angular-2-get-dynamic-formgroup-name
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validateEmail } from './email.validator';

@Component({
  selector: 'app-forms-model',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsModelComponent implements OnInit {
  addresses = [
    {
      address: '123 Main',
      name: 'Fred',
      city: 'New York'
    },
    {
      address: '45 Shady Tree',
      name: 'Tim',
      city: 'Los Angeles'
    },
    {
      address: '45 Shady Tree',
      name: 'Tim',
      city: 'Los Angeles'
    }
  ];

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = new FormGroup({});
    let addressGroup = new FormGroup({});

    this.addresses.map((group, index) => {
      const name = 'address-' + index.toString();
      const formGroup = this.fb.group({
        address: [group.address],
        name: [group.name],
        city: [group.city]
      });
      addressGroup.addControl(name, formGroup);
    })

    this.formGroup.addControl('addresses', addressGroup);
  }

  onSubmit(formGroup) {
    console.log(JSON.stringify(formGroup.value, null, 2));
  }
}
