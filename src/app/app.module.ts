import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FilterStudentsComponent } from './01-ex-filter-students-table/filter-students/filter-students.component';
import { StudentsTableComponent } from './01-ex-filter-students-table/students-table/students-table.component';
import { FilterStudentsSelectionComponent } from './01-ex-filter-students-table/filter-students-selection/filter-students-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    FilterStudentsComponent,
    StudentsTableComponent,
    FilterStudentsSelectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
