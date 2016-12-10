import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Api, Root } from '../../api.backend';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookService {

  constructor(private _http: Http) { }


  getAllBooks() {

  }
  addbook(book: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url: string = Root + Api.book.apiAddBook;
    return this._http
          .post(url,{book}, options)
          // ...and calling .json() on the response to return data
         .map((res: Response) => res.json())
         //...errors if any
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));




  }


}
