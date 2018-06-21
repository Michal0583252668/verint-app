import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  @Input('students') students:Student[];
  
  constructor() { }

  ngOnInit() {
  }

  trackById(student){
    return student.id;
  }
}
