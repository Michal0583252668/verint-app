import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students-details-add',
  templateUrl: './students-details-add.component.html',
  styleUrls: ['./students-details-add.component.css']
})
export class StudentsDetailsAddComponent implements OnInit {

  students:Student[] = [
    new Student('Shahar','graumanoz@gmail.com','Angular',10,45,1500,'http://thefuturegraduate.com/wp-content/uploads/2017/02/2.jpg'),
    new Student('Izdarechet','izdarechet@gmail.com','C++',52,76,7500,'http://i2.cdn.turner.com/money/dam/assets/130628152842-student-studying-620xa.jpg'),
    new Student('Yossi','yossi@gmail.com','C#',75,30,-1900,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VFEQu3v1LkcOPZscSQllLzEjkbZUoQZEVIW9ENvsI8q3eZfA'),
    new Student('Ahmad','ahmad@yahoo.com','PHP',50,80, 2700,'https://www.evolllution.com/wp-content/uploads/2013/03/Adult-Student-using-laptop-32116578-%C2%A9-nyul.jpg'),
    new Student('Tova','tova@gmail.com', 'Java' ,10,90,-3500,'http://www.gettingsmart.com/wp-content/uploads/2016/09/Online-Student-Celebrating-Feature-Image-964x580.jpg'),
  ];
  
  currentStudent:Student;

  constructor() { }

  ngOnInit() {
  }

  selectedStudent(student:Student){
    this.currentStudent = student;
  }

  addNewStudent(student:Student){
    this.students.push(student);
  }
}
