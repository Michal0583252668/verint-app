import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-students',
  templateUrl: './filter-students.component.html',
  styleUrls: ['./filter-students.component.css']
})
export class FilterStudentsComponent implements OnInit {

  filtered:any;

  constructor() {
    this.filtered = this.students;
   }

  ngOnInit() {
  }

  filter(val){
    switch(val){
      case 'all':
        this.filtered = this.students;
      break;

      case 'ids':
        this.filtered = this.students.filter(s => s.id > 0 && s.id < 7);
      break;

      case 'age':
        this.filtered = this.students.filter(s => s.age > 30);
      break;

      case 'avg':
        this.filtered = this.students.filter(s => s.avg_grade > 90);
      break;

      case 'phone':
        this.filtered = this.students.filter(s => s.phone.endsWith('4'));
      break;

      case 'name':
        this.filtered = this.students.filter(s => s.name.toLowerCase().startsWith('b'));
      break;

      default:

      break;
    }
  }

  students = [
    {
      "id": 0,
      "name": "Gamble Foster",
      "age": 27,
      "email": "gamblefoster@moreganic.com",
      "phone": "+1 (804) 469-2701",
      "address": "662 Gerry Street, Torboy, West Virginia, 6142",
      "avg_grade": 74
    },
    {
      "id": 1,
      "name": "Dona Todd",
      "age": 38,
      "email": "donatodd@moreganic.com",
      "phone": "+1 (878) 412-2366",
      "address": "339 Montrose Avenue, Wyano, Pennsylvania, 6854",
      "avg_grade": 90
    },
    {
      "id": 2,
      "name": "Welch Cooke",
      "age": 32,
      "email": "welchcooke@moreganic.com",
      "phone": "+1 (812) 574-2702",
      "address": "568 Evergreen Avenue, Yardville, Minnesota, 2420",
      "avg_grade": 96
    },
    {
      "id": 3,
      "name": "Hickman Petersen",
      "age": 33,
      "email": "hickmanpetersen@moreganic.com",
      "phone": "+1 (933) 422-3102",
      "address": "854 Preston Court, Lutsen, Washington, 5807",
      "avg_grade": 91
    },
    {
      "id": 4,
      "name": "Lilly Ochoa",
      "age": 22,
      "email": "lillyochoa@moreganic.com",
      "phone": "+1 (861) 479-2248",
      "address": "443 Greene Avenue, Idamay, Virgin Islands, 6364",
      "avg_grade": 93
    },
    {
      "id": 5,
      "name": "Campbell Calhoun",
      "age": 26,
      "email": "campbellcalhoun@moreganic.com",
      "phone": "+1 (875) 419-3783",
      "address": "578 Aitken Place, Valle, Oregon, 8222",
      "avg_grade": 89
    },
    {
      "id": 6,
      "name": "Ethel Patrick",
      "age": 26,
      "email": "ethelpatrick@moreganic.com",
      "phone": "+1 (924) 466-3077",
      "address": "794 Banker Street, Brandermill, Texas, 9029",
      "avg_grade": 100
    },
    {
      "id": 7,
      "name": "Benjamin House",
      "age": 23,
      "email": "benjaminhouse@moreganic.com",
      "phone": "+1 (837) 584-2164",
      "address": "372 Heath Place, Bladensburg, Colorado, 5430",
      "avg_grade": 71
    },
    {
      "id": 8,
      "name": "Acosta Bridges",
      "age": 36,
      "email": "acostabridges@moreganic.com",
      "phone": "+1 (891) 462-3863",
      "address": "357 Calder Place, Lacomb, Arkansas, 3942",
      "avg_grade": 90
    },
    {
      "id": 9,
      "name": "French Cote",
      "age": 33,
      "email": "frenchcote@moreganic.com",
      "phone": "+1 (954) 551-2675",
      "address": "906 Reed Street, Ernstville, Connecticut, 3935",
      "avg_grade": 74
    },
    {
      "id": 10,
      "name": "Cruz May",
      "age": 20,
      "email": "cruzmay@moreganic.com",
      "phone": "+1 (971) 493-3391",
      "address": "191 Court Street, Onton, Alaska, 1689",
      "avg_grade": 97
    },
    {
      "id": 11,
      "name": "Barton Bruce",
      "age": 25,
      "email": "bartonbruce@moreganic.com",
      "phone": "+1 (947) 452-2091",
      "address": "575 Dictum Court, Cresaptown, District Of Columbia, 3362",
      "avg_grade": 85
    },
    {
      "id": 12,
      "name": "Bernice Brady",
      "age": 33,
      "email": "bernicebrady@moreganic.com",
      "phone": "+1 (919) 513-2260",
      "address": "417 Chauncey Street, Babb, New Hampshire, 7991",
      "avg_grade": 77
    },
    {
      "id": 13,
      "name": "Hartman Pollard",
      "age": 26,
      "email": "hartmanpollard@moreganic.com",
      "phone": "+1 (851) 462-2401",
      "address": "126 Hill Street, Cetronia, Hawaii, 261",
      "avg_grade": 82
    },
    {
      "id": 14,
      "name": "Queen Watkins",
      "age": 23,
      "email": "queenwatkins@moreganic.com",
      "phone": "+1 (937) 548-3674",
      "address": "344 Vermont Court, Garberville, Delaware, 516",
      "avg_grade": 87
    }
  ]
}
