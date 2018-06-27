import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input('inputStudent') student:Student;
  @Output('onStudentEdit') editStudent:EventEmitter<any>;

  constructor() {
    this.editStudent = new EventEmitter<any>();
   }

  ngOnInit() {
  }

  editThisStudent(){
    this.editStudent.emit();
  }
}