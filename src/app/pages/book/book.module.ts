import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BookComponent } from './book.component';
import { BookRouting } from './book.routing';
import { AddBookComponent } from './add-book/add-book.component';

import { Ng2CompleterModule } from "ng2-completer";
import {SelectModule} from 'angular2-select';
import { FileSelectDirective, FileDropDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { ng2BootstrapModules,ng2BootstrapProviders } from '../../ng2-bootstrap.module';
import { Angular2MaterialModules,Angular2MaterialProviders } from '../../angular2-material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    Ng2CompleterModule,
    ng2BootstrapModules,
    SelectModule,
    FileUploadModule,Angular2MaterialModules,
    BookRouting,
  ],
  declarations: [BookComponent, AddBookComponent],
  providers: [Angular2MaterialProviders]
})
export class BookModule { }
