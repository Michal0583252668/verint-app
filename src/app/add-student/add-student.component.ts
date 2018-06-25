import { Courses } from './../models/student';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VerintValidators } from '../models/validators/VerintValidators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  addForm:FormGroup;
  
  get fullName() { return this.addForm.controls.fullName; }
  get firstName() { return (this.addForm.controls.fullName as FormGroup).controls.firstName; }
  get lastName() { return (this.addForm.controls.fullName as FormGroup).controls.lastName; }
  get email() { return this.addForm.controls.email; }
  get course() { return this.addForm.controls.course; }
  get balance() { return this.addForm.controls.balance; }

  courses:string[];

  constructor() { 
    this.addForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      }, VerintValidators.fullNameIsSymonCohen()), 
      email: new FormControl(null, 
          [Validators.required, Validators.pattern(/^\S+@\S+$/),
            VerintValidators.domainEmailValidator('gmail') ]),
      course: new FormControl(null, Validators.required),
      grade: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      courseProgress: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(100)]),
      balance: new FormControl(0, Validators.required),
      image: new FormControl(null)
    });

    this.courses = Object.values(Courses).filter(v => typeof v !== 'number');
  }

  addNewStudent(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
    }else{
      console.log('Form not valid');
    }
  }
}