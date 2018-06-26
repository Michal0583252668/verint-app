# VerintApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


01 - Components
---------------

We've added few components and used few kind of bindings, such as {{ }}, [] and ().
{{ }} is interpolation binding of data flowing to the html,
[] is binding from the data source to the DOM property of the HTML control (<img [src]="data">)
And () is event binding from the template to the data source, such as click event (<button (click)="handler">)


Install Bootstrap:
npm install bootstrap --save
npm install jquery --save
npm install popper.js --save


07 Exercise - Input, Output and Mode Driven Form
------------------------------------------------

1 - Let's move the hardcoded courses into it's own model, an enum, 
    in the same file as Student.
2 - Then replace the hardcoded options with binding to this enum values
3-  Add validations: 
   -Student name should be splitted into 2 inputs: First Name and Last Name
   -First name is mandatory, no less than 2 characters 
   -Last name is mandatory, no less than 2 characters 
   -Course is mandatory 
   -Grade is mandatory, 0 to 100 
   -Email is mandatory, must be in the correct format 
   -Balance is mandatory 
   -Progress is mandatory, 0 to 100 
   -Image isn't mandatory

4 - Disable the submit button when the form is invalid.

Continue with a whole exercise with what we've done so far:

5 - In the page, add, to the left, list of students names
6 - In the middle, to the right of the names list, when a student name is clicked, show student's details
7 - Add a button for adding new student. When clicked, show the form on the right.
8 - When submitted, add the new student to the list

-------------------------------------------------------------------------------
                          The page
                          
     -------------------------------------------------------
     students names  | Selected Student  |  Add New Student
           list      |    Details        |       Form 
     -------------------------------------------------------


-------------------------------------------------------------------------------



