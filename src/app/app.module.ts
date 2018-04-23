// Common Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// component
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { PostsComponent } from './posts/posts.component';
import { OrderComponent } from './order/order.component';
// service
import { EmployeeService } from './service/employee/employee.service';
import { BooksService } from './service/books/books.service';
import { NewemployeeService } from './service/employee/newemployee.service';
import { PostInterceptorService } from './service/posts/post-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    BooksComponent,
    BooksListComponent,
    PostsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   // {provide:EmployeeService,useClass:EmployeeService},
    {provide:EmployeeService,useClass:EmployeeService},
    {provide:HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi:true}
    ,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
