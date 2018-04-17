// Common Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// component
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    BooksComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
