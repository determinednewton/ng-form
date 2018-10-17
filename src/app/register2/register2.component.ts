import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserRegistration } from '../user-registration';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component {
  model = new UserRegistration();

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'name': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('', [
        Validators.required,
        () => (this.validatePasswords())
      ]),
      'repeatPassword': new FormControl('', [
        Validators.required,
        () => (this.validatePasswords())
      ]),
    });
  }

  validatePasswords(): ValidationErrors | null {
    const formGroup = this.formGroup;

    if (!formGroup || !formGroup.controls['password'] || !formGroup.controls['repeatPassword']) {
      return;
    }

    const isInvalid = formGroup.controls['password'].value !== formGroup.controls['repeatPassword'].value; // !== ! = =
    if (!isInvalid) {
      return undefined;
    }

    return {
      appSamePasswords: 'The passwords don\'t match',
    };
  }

  submit() {
    console.log(this.formGroup.value);
  }

  logForm() {
    console.log(this.formGroup);
  }
}
