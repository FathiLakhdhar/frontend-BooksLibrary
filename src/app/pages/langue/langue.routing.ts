import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LangueComponent} from './langue.component';


const routes : Routes =[
    {path: '', component: LangueComponent, pathMatch: 'full'},
];

export const LangueRouting: ModuleWithProviders= RouterModule.forChild(routes);