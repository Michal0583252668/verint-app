import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students:Student[] = [
    new Student('Shahar','graumanoz@gmail.com','Angular 5',10,45,1500,'http://thefuturegraduate.com/wp-content/uploads/2017/02/2.jpg'),
    new Student('Izdarechet','graumanoz@gmail.com','Java',70,95,7500,'http://i2.cdn.turner.com/money/dam/assets/130628152842-student-studying-620xa.jpg'),
    new Student('Yossi','graumanoz@gmail.com','Angular 5',90,20,-500,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VFEQu3v1LkcOPZscSQllLzEjkbZUoQZEVIW9ENvsI8q3eZfA'),
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
