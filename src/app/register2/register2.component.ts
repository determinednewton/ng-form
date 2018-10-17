import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserRegistration } from '../user-registration';
import { PasswordsComponent } from '../passwords/passwords.component';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements AfterViewInit {
  model = new UserRegistration();

  formGroup: FormGroup;

  @ViewChild(PasswordsComponent) passwordsComponent;

  constructor() {
    this.formGroup = new FormGroup({
      'name': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ])
    });
  }

  submit() {
    console.log(this.formGroup.value);
  }

  logForm() {
    console.log(this.formGroup);
  }

  ngAfterViewInit(): void {
    this.formGroup.addControl('passwordsGroup', this.passwordsComponent.formGroup);
  }
}
