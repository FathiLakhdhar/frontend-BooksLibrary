import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthorComponent} from './author.component'; 


const routes : Routes=[
    {path: "", component: AuthorComponent, pathMatch: 'full'}
];
 
 export const AuthorRouting: ModuleWithProviders=RouterModule.forChild(routes);