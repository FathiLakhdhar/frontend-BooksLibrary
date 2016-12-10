import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import {BookService} from '../book.service' ;


const URL = '/api/';


@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css'],
    providers: [BookService]
})
export class AddBookComponent implements OnInit, AfterViewInit {




    public uploader: FileUploader = new FileUploader(
        {
            url: URL,
            disableMultipart : true
        },

    );
    author_touched = false;
    keywords_touched = false;
    isbn_touched = false;

    private searchStr: string;
    private dataService: CompleterData;



    DataAuteurs = [
        {
            value: 'a',
            label: 'Alpha'
        },
        {
            value: 'b',
            label: 'Beta'
        },
        {
            value: 'c',
            label: 'Gamma'
        }
    ];
    DataEditions = [
        {
            value: 'a',
            label: 'Alpha'
        },
        {
            value: 'b',
            label: 'Beta'
        },
        {
            value: 'c',
            label: 'Gamma'
        }
    ];

    DataKeyWords = [
        { value: '0', label: 'word 0' },
        { value: '1', label: 'word 1' },
        { value: '2', label: 'word 2' },
        { value: '3', label: 'word 3' },
        { value: '4', label: 'word 4' },
        { value: '5', label: 'word 5' },
        { value: '6', label: 'word 6' },
    ]

    constructor(private completerService: CompleterService , private bookservice: BookService) {
        //this.dataService = completerService.local(this.DataAuteurs, 'label', 'value');
    }


    result:any;
    error:any;

    ngSubmit(add_form) {
        console.log("submit =>",add_form.value);
        this.bookservice.addbook(add_form.value)
                        .subscribe(
                            res => this.result= res,
                            err => this.error=err
                        );
    }

    onSelectclosedAuthor() {
        this.author_touched = true;
    }
    onSelectclosedIsbn() {
        this.isbn_touched = true;
    }
    onSelectclosedKeywords() {
        this.keywords_touched = true;
    }

    ngOnInit() {
        
    }


    ngAfterViewInit() {

    }


}
