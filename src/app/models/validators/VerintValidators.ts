import { AbstractControl, ValidationErrors } from "@angular/forms";

export class VerintValidators {
    static domainEmailValidator(domain:string) {
        return (control:AbstractControl): ValidationErrors | null => {
            const value:string = control.value;
            
            if(!value) return null;
    
            const [before, after] = value.split('@');
    
            if(after && !after.toLowerCase().includes(domain)){
            return {
                'domainEmail' : `Email must be in ${domain} domain`
            }
            }
            
            return null;
        }
    }
}