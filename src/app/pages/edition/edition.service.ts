import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Api, Root } from '../../api.backend';

@Injectable()
export class EditionService {
  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private _http: Http) { }


  getAll(){
    let url= Root+Api.edition.getAll;

    return this._http.get(url,this.options)
    .map((res:Response)=> res.json())
    .catch((err: any)=> Observable.throw(err.json().errors || 'Server error'));
  }

  add(data){
    let url=Root+Api.edition.apiAdd;
    return this._http.post(url,data,this.options)
    .map((res: Response)=> res.json())
    .catch((err: any)=> Observable.throw(err.json() || 'Server error'));
  }


  //edit Author
  edit(edition){
    let url= Root+Api.edition.apiEdit
    return this._http.put(url, edition, this.options)
    .map((res: Response)=>res.json())
    .catch((err:any)=> Observable.throw(err.json() || 'Server error'));
  }



  Remove(id){
    let url= Root+Api.edition.apiDell+"/"+id
    return this._http.delete(url, this.options)
    .map((res: Response)=>res.json())
    .catch((err:any)=> Observable.throw(err.json() || 'Server error'));
  }


}
