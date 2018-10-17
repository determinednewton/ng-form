import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html',
  styleUrls: ['./passwords.component.css']
})
export class PasswordsComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      'password':
        new FormControl('', [
          Validators.required,
        ]),
      'repeatPassword':
        new FormControl('', [
          Validators.required,
        ]),
    }, [
      (ac) => (this.validatePasswords(ac))
    ]);
  }

  validatePasswords(abstractControl: AbstractControl): ValidationErrors | null {
    // const formGroup = this.formGroup;
    const formGroup = abstractControl as FormGroup;

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

  ngOnInit() {
  }

}
