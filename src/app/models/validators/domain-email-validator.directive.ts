import { VerintValidators } from './VerintValidators';
import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDomainEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: DomainEmailValidatorDirective, 
    multi: true
  }]
})
export class DomainEmailValidatorDirective implements Validator {

  @Input('appDomainEmailValidator') domain:string;

  validate(c: AbstractControl): ValidationErrors | null {
    return VerintValidators.domainEmailValidator(this.domain)(c);
  }

  constructor() { }

}
