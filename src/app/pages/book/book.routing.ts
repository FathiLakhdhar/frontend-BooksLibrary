import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book.component';
const routes: Routes = [
    { path: '', component: BookComponent , pathMatch: 'full'},
    { path: 'add', component: AddBookComponent }
];


export const BookRouting: ModuleWithProviders = RouterModule.forChild(routes);