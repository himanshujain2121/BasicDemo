import { Component, OnInit, ViewChild, ViewChildren,QueryList } from '@angular/core';
import { Book } from './books-list/book';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    { id: 1, name: 'java', author: 'james', version: '1.2', price: 105 },
    { id: 4, name: 'Angular', author: 'kaushik', version: '3.2', price: 408 },
    { id: 6, name: 'javascript', author: 'belon', version: '3.7', price: 203 },
    { id: 2, name: 'html', author: 'mark', version: '6.7', price: 500 },
    { id: 3, name: 'spring', author: 'joule', version: '1.4', price: 110 }
  ];

  @ViewChild(BooksListComponent)
  booklistcomponent:BooksListComponent;
  @ViewChildren(BooksListComponent)
  bookListChildernView:QueryList<BooksListComponent>;

  constructor() { }

  ngOnInit() {
  }
loadBooks(){
  this.booklistcomponent.booklist = this.books;
  this.bookListChildernView.forEach((bookcomponent)=>{
    bookcomponent.booklist = this.books;
  })
}
}
