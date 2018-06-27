import { Component, OnInit, Input } from '@angular/core';
import { Courses, Student } from '../models/student';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input('student') student:Student;
  
  courses:string[];
  
  constructor() {
    this.courses = Object.values(Courses).filter(v => typeof v !== 'number');
  }

  ngOnInit() {
  }

  editStudent(editForm:FormGroup){
    if(editForm.valid){
      console.log(editForm.value);
    }
  }

}
