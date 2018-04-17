import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BooksService {

  booksList:Book[];
  constructor() { }

  getBookList(){
    this.booksList = [
      { id: 1, name: 'java', author: 'james', version: '1.2', price: 105 },
    { id: 4, name: 'Angular', author: 'kaushik', version: '3.2', price: 408 },
    { id: 6, name: 'javascript', author: 'belon', version: '3.7', price: 203 },
    { id: 2, name: 'html', author: 'mark', version: '6.7', price: 500 },
    { id: 3, name: 'spring', author: 'joule', version: '1.4', price: 110 }
    ];
    return this.booksList;
  }
}
