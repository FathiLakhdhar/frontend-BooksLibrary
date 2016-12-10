import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Api, Root} from '../../api.backend';
@Injectable()
export class AuthorService {

  headers= new Headers({'Content-Type':'application/json'});
  options= new RequestOptions({headers: this.headers});

  constructor(private _http: Http) { }

  getAll(){
    let url= Root+Api.author.getAll;

    return this._http.get(url,this.options)
    .map((res:Response)=> res.json())
    .catch((err: any)=> Observable.throw(err.json().errors || 'Server error'));
  }

  add(data){
    let url=Root+Api.author.apiAdd;
    return this._http.post(url,data,this.options)
    .map((res: Response)=> res.json())
    .catch((err: any)=> Observable.throw(err.json() || 'Server error'));
  }


  //edit Author
  edit(author){
    let url= Root+Api.author.apiEdit
    return this._http.put(url, author, this.options)
    .map((res: Response)=>res.json())
    .catch((err:any)=> Observable.throw(err.json() || 'Server error'));
  }



  Remove(id){
    let url= Root+Api.author.apiDell+"/"+id
    return this._http.delete(url, this.options)
    .map((res: Response)=>res.json())
    .catch((err:any)=> Observable.throw(err.json() || 'Server error'));
  }



  
}
