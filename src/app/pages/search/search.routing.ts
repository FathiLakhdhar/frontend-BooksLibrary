import{Routes, RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {SearchComponent} from './search.component'


const routes : Routes=[
    {path: '', component: SearchComponent, pathMatch: 'full'}
];


export const SearchRouting : ModuleWithProviders = RouterModule.forChild(routes);