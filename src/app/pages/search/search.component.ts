import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


    options = [
        {
            value: 'Book',
            label: 'Book'
        },
        {
            value: 'Language',
            label: 'Language'
        },
        {
            value: 'Edition',
            label: 'Edition'
        },
  
    ];

    public searchs=[];



  constructor() { }

  ngOnInit() {
  }

}
