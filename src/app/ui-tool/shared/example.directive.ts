import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {TypeEnum} from "../enums/type.enum";

export function exampleStringValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const validName = RegExp('^[a-zA-Z\S]+$').test(control.value);
    return validName ? null : {nameValidator: {value: control.value}};
  };
}

export function exampleNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {

    const validName = RegExp('^[0-9]+(\.[0-9]+)?$').test(control.value);
    return validName ? null : {nameValidator: {value: control.value}};
  };
}


@Directive({
  selector: '[appExampleValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ExampleDirective, multi: true}]
})
export class ExampleDirective implements Validator {
  @Input('appExampleValidator') exampleValidator: TypeEnum;

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.exampleValidator === TypeEnum.string) {
      return null;
    } else if (this.exampleValidator === TypeEnum.number) {
      return exampleNumberValidator()(control);
    } else {
      return exampleStringValidator()(control);
    }
  }
}

