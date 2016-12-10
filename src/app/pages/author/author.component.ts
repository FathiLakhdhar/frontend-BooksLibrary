import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';
import {SearchPipe}from '../search.pipe';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService],
})
export class AuthorComponent implements OnInit {

  authors = [];
  authors3 = [];
  errors = [];
  response = [];
  add_form;
  filterBy={'attr':'nom'};

  public totalItems: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 3;
  public maxSize = 3

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAll().subscribe(
      res => this.OnLoadItem(res),
      err => this.errors = err
    );
  }


  ngSubmit(form) {
    console.log(form.value);
    this.authorService.add(form.value).subscribe(
      res => this.ResultAddLang(res, form),
      err => this.errors = err
    );
  }

  OnLoadItem(res) {
    this.authors = res
    this.UpdateItemPerPages(1)
    this.UpdateTotalItem();
  }

  UpdateTotalItem() {
    this.totalItems = this.authors.length;
  }

  pageChanged(event){
    console.log(event, this.currentPage);
    this.UpdateItemPerPages(event.page);
    this.currentPage=event.page;
  }

  UpdateItemPerPages(page) {
    
    let start = this.itemsPerPage * (page-1);
    let end = start + this.itemsPerPage;
    this.authors3 = this.authors.slice(start,end)
  }

  ResultAddLang(res, form) {
    this.response = res
    if (res.success == true) {
      //notif sccess
      form.reset();
      this.authors.push(res.author);
      this.UpdateTotalItem();
      this.UpdateItemPerPages(this.currentPage);

    } else {
      //remove author
      this.errors = res.errors;
    }

  }




  //Edit Author
  Edit(author) {
    this.authorService.edit(author).subscribe(
      res => this.response = res,
      err => this.errors = err
    )
  }

  //Remove Author
  onRemove(author) {
    this.authorService.Remove(author.code_personne).subscribe(
      res => this.ResultRemove(res, author),
      err => this.errors = err
    )
  }

  ResultRemove(res, author) {
    if (res.success) {
      this.authors.splice(this.authors.indexOf(author), 1);
      this.UpdateTotalItem();
      this.UpdateItemPerPages(this.currentPage);
      //notif
    }
  }

}
