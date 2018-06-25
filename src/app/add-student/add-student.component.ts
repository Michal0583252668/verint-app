import { Courses, Student } from './../models/student';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VerintValidators } from '../models/validators/VerintValidators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  @Output('newStudent') newStudent:EventEmitter<Student> = new EventEmitter<Student>();

  addForm:FormGroup;
  
  get fullName() { return this.addForm.controls.fullName; }
  get firstName() { return (this.addForm.controls.fullName as FormGroup).controls.firstName; }
  get lastName() { return (this.addForm.controls.fullName as FormGroup).controls.lastName; }
  get email() { return this.addForm.controls.email; }
  get grade() { return this.addForm.controls.grade; }
  get course() { return this.addForm.controls.course; }
  get courseProgress() {return this.addForm.controls.courseProgress;}
  get balance() { return this.addForm.controls.balance; }
  get image() { return this.addForm.controls.image; }

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
      const student = new Student(
        `${this.firstName.value} ${this.lastName.value}`,
        this.email.value,
        this.course.value,
        this.grade.value,
        this.courseProgress.value,
        this.balance.value,
        this.image.value
      );
      this.newStudent.emit(student);
    }else{
      console.log('Form not valid');
    }
  }
}