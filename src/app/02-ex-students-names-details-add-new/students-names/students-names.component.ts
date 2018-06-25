import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students-names',
  templateUrl: './students-names.component.html',
  styleUrls: ['./students-names.component.css']
})
export class StudentsNamesComponent implements OnInit {

  @Input('students') students:Student[];
  @Output('selected') selectedStudent:EventEmitter<Student>;
  
  currentStudent:Student;

  constructor() {
    this.selectedStudent = new EventEmitter<Student>();
   }

  ngOnInit() {
  }

  selected(student){
    this.currentStudent = student;
    this.selectedStudent.emit(student);
  }
}
