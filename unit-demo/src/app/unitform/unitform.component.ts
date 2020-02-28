// https://github.com/SantiagoGdaR/angular4-unit-test

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './unitform.component.html',
  styleUrls: ['./unitform.component.css']
})
export class UnitformComponent implements OnInit {
    constructor() {
        this.createForm();
    }

    ngOnInit(): void {
        
    }
    text = 'contact page';
    contactForm: FormGroup;
    contact = {
        name: '',
        email: '',
        text: ''
    };
    submitted = false;

  

    createForm(): void {
        this.contactForm = new FormGroup({
            'name': new FormControl(this.contact.name, [
                Validators.required,
                Validators.minLength(5)
            ]),
            'email': new FormControl(this.contact.email, [
                Validators.required,
                Validators.email
            ]),
            'text': new FormControl(this.contact.text, Validators.required)
        });
    }

    onSubmit(): void {
        this.submitted = true;
    }
}
