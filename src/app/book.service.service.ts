import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { BookstallService } from './bookstall.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  addbook(bookObj: BookstallService) {
    throw new Error('Method not implemented.');
  }

  addbookURL : string;

  constructor(private http :HttpClient) { 

    this.addbookURL =
    "http://127.0.0.1:5000/insert"
  }

addBook(book :BookstallService):
Observable<BookstallService>{
  return this.http.post <BookstallService>
  (this.addbookURL,book)

}
}
