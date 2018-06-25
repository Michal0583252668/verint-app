export class Student {
    constructor(
        public name = 'Shahar',
        public email = 'graumanoz@gmail.com',
        public course = 'Angular 5',
        public grade = 60,
        public courseProgress = 45,
        public balance = 1500,
        public image = 'http://thefuturegraduate.com/wp-content/uploads/2017/02/2.jpg'  
    ){}
}

export enum Courses {
    'Angular',
    'Java',
    'C#',
    'C++',
    'PHP'
}
