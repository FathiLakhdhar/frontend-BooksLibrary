import { Component, OnInit, ElementRef } from '@angular/core';
import { LangueService } from './langue.service';
import { Langue } from './langue';
declare var jQuery: any;


@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css'],
  providers: [LangueService]
})
export class LangueComponent implements OnInit {

  result ;
  error;
  inputLang;
  langues = [];
  constructor(private el: ElementRef, private langueService: LangueService) {
  }

  ngOnInit() {
    this.langueService.getAllLanguages().subscribe(
      res => this.langues = res,
      error => this.error = error
    );
  }

  ngSubmit(add_form) {
    console.log("submit =>", add_form.value);
    this.langueService.addLanguage(add_form.value)
      .subscribe(
      res => this.ResultAddLang(res),
      err => this.ErrorAddLang(err)
      );
  }


  onRemove(langue){
    this.langues.splice(this.langues.indexOf(langue), 1);
    this.langueService.delLanguage(langue.code_langue).subscribe(
      res=> console.log(res),
      error=>console.log(error)
    );
  }

  Edit(langue){
    console.log(langue);
      this.langueService.EditLanguage(langue).subscribe(
      res=> console.log(res),
      error=>console.log(error)
    );
  }


  ResultAddLang(res: any) {
    this.result = res.success  ;
    
    if(this.result){
      console.log(res.language);
      this.langues = this.langues.concat([res.language]);
    }else{
      this.error= res.errors || null;
      this.inputLang="";
      
    }
    
  }
  ErrorAddLang(error) {
    this.error = error
  }

}
