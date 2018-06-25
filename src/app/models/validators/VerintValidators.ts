import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

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

    static fullNameIsSymonCohen(){
        return (control:FormGroup): ValidationErrors | null => {
            const fname:string = control.controls.firstName.value,
                  lname:string = control.controls.lastName.value;

            console.log(fname, lname);

            if(!fname || !lname) return null;

            if(!fname.toLowerCase().includes('symon') || 
               !lname.toLowerCase().includes('cohen')){
                return {
                    'whereIsSymon': 'Symon Cohen is missing'
                }
            }

            return null;
        }
    }
}