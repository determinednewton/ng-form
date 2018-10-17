import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appSamePasswords]',
  providers: [
    { provide: NG_VALIDATORS, useClass: SamePasswordsDirective, multi: true }
  ]
})
export class SamePasswordsDirective implements Validator {

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;

    // We need this because controls are added incrementally and the validator
    // is on the form
    if (!formGroup.controls['password'] || !formGroup.controls['repeatPassword']) {
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

}
