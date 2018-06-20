import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  firstName = 'Shahar';
  email = 'graumanoz@gmail.com';
  image = 'http://thefuturegraduate.com/wp-content/uploads/2017/02/2.jpg';
  grade = 60;

  constructor() {
    setTimeout(() => {
      this.image = 'http://i2.cdn.turner.com/money/dam/assets/130628152842-student-studying-620xa.jpg';
    }, 5000);
   }
   nameChanged(newFname:string){
     this.firstName = newFname;
   }

  ngOnInit() {
  }

}
