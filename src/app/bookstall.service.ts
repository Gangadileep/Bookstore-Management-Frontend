import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookstallService {
  bookname: string='';
  isbn: number=0;
  author: string='';
  category: string='';
  prize: string='';
  book_name: any;
  constructor() { }
}
