import { Component, OnInit } from '@angular/core';
import { EditionService } from './edition.service'

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css'],
  providers:[EditionService]
})
export class EditionComponent implements OnInit {

  editions = [];
  editions3 = [];
  errors = [];
  response = [];
  selectTouched=false;
  options = [
        {
            value: 'France',
            label: 'France'
        },
        {
            value: 'Algerie',
            label: 'Algerie'
        },
        {
            value: 'Egypte',
            label: 'Egypte'
        },
        {
            value: 'Maroc',
            label: 'Maroc'
        },
        {
            value: 'Tunisie',
            label: 'Tunisie'
        },
        {
            value: 'Turquie',
            label: 'Turquie'
        }
    ];


  public totalItems: number = 0;
  public currentPage: number = 1;
  public itemsPerPage: number = 3;
  public maxSize = 3

  constructor(private editionService: EditionService) { }

  ngOnInit() {
    this.editionService.getAll().subscribe(
      res => this.OnLoadItem(res),
      err => this.errors = err
    );
  }


  ngSubmit(form) {
    console.log(form.value);
    this.editionService.add(form.value).subscribe(
      res => this.ResultAdd(res, form),
      err => this.errors = err
    );
  }

  OnLoadItem(res) {
    this.editions = res
    this.UpdateItemPerPages(1)
    this.UpdateTotalItem();
  }

  UpdateTotalItem() {
    this.totalItems = this.editions.length;
  }

  pageChanged(event) {
    console.log(event, this.currentPage);
    this.UpdateItemPerPages(event.page);
    this.currentPage = event.page;
  }

  UpdateItemPerPages(page) {

    let start = this.itemsPerPage * (page - 1);
    let end = start + this.itemsPerPage;
    this.editions3 = this.editions.slice(start, end);
  }

  ResultAdd(res, form) {
    this.response = res
    if (res.success == true) {
      //notif sccess
      form.reset();
      this.editions.push(res.edition);
      this.UpdateTotalItem();
      this.UpdateItemPerPages(this.currentPage);

    } else {
      //remove author
      this.errors = res.errors;
    }

  }




  //Edit Author
  Edit(edition) {
    this.editionService.edit(edition).subscribe(
      res => this.response = res,
      err => this.errors = err
    )
  }

  //Remove Author
  onRemove(edition) {
    this.editionService.Remove(edition.isbn).subscribe(
      res => this.ResultRemove(res, edition),
      err => this.errors = err
    )
  }

  ResultRemove(res, edition) {
    console.log(res,'//',edition);
    if (res.success) {
      console.log(res);
      this.editions.splice(this.editions.indexOf(edition), 1);
      this.UpdateTotalItem();
      this.UpdateItemPerPages(this.currentPage);
      //notif
    }
  }




  //select pays
  onSelectclosed($event){
    this.selectTouched=true
  }


}
