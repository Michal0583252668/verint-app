import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FilterStudentsComponent } from './01-ex-filter-students-table/filter-students/filter-students.component';
import { StudentsTableComponent } from './01-ex-filter-students-table/students-table/students-table.component';
import { FilterStudentsSelectionComponent } from './01-ex-filter-students-table/filter-students-selection/filter-students-selection.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsNamesComponent } from './02-ex-students-names-details-add-new/students-names/students-names.component';
import { StudentsDetailsAddComponent } from './02-ex-students-names-details-add-new/students-details-add/students-details-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    FilterStudentsComponent,
    StudentsTableComponent,
    FilterStudentsSelectionComponent,
    AddStudentComponent,
    StudentsNamesComponent,
    StudentsDetailsAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [StudentsDetailsAddComponent]
})
export class AppModule { }
