import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookCache: {[isbn: string]: Book} = { }

  constructor(private http: HttpClient) { }

  // Rx.Observable
  // .of({
  //   0: { data : 'lorem' },
  //   1: { data : 'lorem' },
  //   2: { data : 'lorem' }
  // })
  // .map(data => Object.keys(data).map(k => data[k]))
  // .subscribe(data => console.log(data));


  //const arraySource = Observable.of([1, 2, 3, 4, 5]);
  getBooks() : Observable<Book[]> {
    debugger;
    let books = new Array<Book>();
    if(Object.keys(this.bookCache).length != 0){
      console.log('inside getbooks');
      Object.entries(this.bookCache).forEach(
        ([key, value]) => books.push(value)
      );
      return of(books); 
    }
   
    return this.http.get<Book[]>("/books").pipe(
      tap(books => books.forEach(book => {this.bookCache =  {[book.isbn]:book}})),
      catchError(err =>  of(`Book list cache error: ${err}`))
    )
  }

  getBook(isbn: string): Observable<Book> {
    let cachedBook = this.bookCache[isbn]

    if (cachedBook !== undefined) {
      console.log("Got a cache hit")
      return of(cachedBook)
    }

    return this.http.get<Book>(`/books/${isbn}`).pipe(
      tap(book => this.bookCache[isbn] = book),
      catchError(err => cachedBook ? of(cachedBook) : throwError(err))
    )
  }

  deleteBook(isbn: string): Observable<any> {
    let cachedBook = this.bookCache[isbn]

    if (cachedBook !== undefined) {
      console.log("Delete cached book")
      this.bookCache.books[isbn].pop();
      return of(cachedBook)
    }

    return this.http.delete(`/books/${isbn}`).pipe(
      tap(_ => delete this.bookCache[isbn]),
      catchError((err:HttpErrorResponse) => {
        if (err.status == 0) {
          return throwError("Oops! Please check your network connection and try again.")
        } else {
          return throwError("Sorry there was a problem at the server.")
        }
      })
    )
  }

  saveBook(book: Book): Observable<any> {
    return this.http.put(`/books/${book.isbn}`, book).pipe(
      tap(_ => this.bookCache[book.isbn] = book)
    )
  }
}


export class Book {
  isbn: string
  title: string
  price: number
}
