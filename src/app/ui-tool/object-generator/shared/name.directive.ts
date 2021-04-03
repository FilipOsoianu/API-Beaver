import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Directive, Input} from '@angular/core';

export function forbiddenNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const validName = RegExp('^[a-zA-Z\S]+$').test(control.value);
    return validName ? null : {nameValidator: {value: control.value}};
  };
}

@Directive({
  selector: '[appNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameDirective, multi: true}]
})
export class NameDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenNameValidator()(control);
  }
}

