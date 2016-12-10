import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Api, Root } from '../../api.backend';
import { Observable } from 'rxjs/Rx';
import {Langue} from './langue';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LangueService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });


  constructor(private _http: Http) { }

  getAllLanguages() {
    let url=Root+Api.language.getAll;
    return this._http.get(url, this.options)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().errors || 'Server error'));
  }



  addLanguage(language: any) {

    let url = Root + Api.language.apiAdd;

    return this._http.post(url, language, this.options)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().errors || 'Server error'));
  }


    EditLanguage(language: any) {

    let url = Root + Api.language.apiEdit;

    return this._http.post(url, language, this.options)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().errors || 'Server error'));
  }



  delLanguage(id:any){
    let url = Root+ Api.language.apiDell+"/"+id;
    return this._http.delete(url,this.options)
    .map((res: Response) =>res.json())
    .catch((error: any) => Observable.throw(error.json().errors|| 'Server error'))
  }

}
