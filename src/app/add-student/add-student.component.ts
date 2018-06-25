import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addForm:FormGroup;
  
  get name() { return this.addForm.controls.name; }
  get email() { return this.addForm.controls.email; }

  constructor() { 
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^\S+@\S+$/)]),
      course: new FormControl(null, Validators.required),
      grade: new FormControl(0, Validators.required),
      courseProgress: new FormControl(0, Validators.required),
      balance: new FormControl(0, Validators.required),
    });
  }

  addNewStudent(){
    if(this.addForm.valid){
      console.log(this.addForm.value);
    }else{
      console.log('Form not valid');
    }
  }

  ngOnInit() {
  }

}
