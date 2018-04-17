import { Component, OnInit, ViewChild, ViewChildren,QueryList } from '@angular/core';
import { Book } from '../service/books/book';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksService } from '../service/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  @ViewChild(BooksListComponent)
  booklistcomponent:BooksListComponent;
  @ViewChildren(BooksListComponent)
  bookListChildernView:QueryList<BooksListComponent>;

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBookList();
  }
loadBooks(){
  this.booklistcomponent.booklist = this.books;
  this.bookListChildernView.forEach((bookcomponent)=>{
    bookcomponent.booklist = this.books;
  })
}
}
