import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserRegistration } from '../user-registration';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  model = new UserRegistration();

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'name': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      'repeatPassword': new FormControl(),
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.model);
  }

  logForm() {
    console.log(this.formGroup);
  }
}
