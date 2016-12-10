import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import{EditionComponent} from './edition.component'

const routes: Routes=[
    {path:"", component: EditionComponent, pathMatch: 'full'}
];

export const EditionRouting: ModuleWithProviders= RouterModule.forChild(routes);