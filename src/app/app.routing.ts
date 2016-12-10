import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders  } from '@angular/core';
import {NotFoundComponent} from './pages/not-found/not-found.component';


export const routes : Routes= [
   { path: '', redirectTo: 'pages', pathMatch: 'full' },
   { path:'**', component: NotFoundComponent }
];


export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);