import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {PagesRouting} from './pages.routing';
import { AuthorComponent } from './author/author.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    PagesRouting,
  ],
  declarations: [PagesComponent, NotFoundComponent,  ],
  providers: []
})
export class PagesModule { }
