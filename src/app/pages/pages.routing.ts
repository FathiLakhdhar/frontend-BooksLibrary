import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookModule} from './book/book.module';


const routes: Routes = [
    {
        path:'pages',
        component: PagesComponent,
        children: [
            {path:'', redirectTo:'dashboard', pathMatch: 'full'},
            {path:'dashboard', component: DashboardComponent },
            {path:'book', loadChildren: 'app/pages/book/book.module#BookModule' },
            {path:'language', loadChildren: 'app/pages/langue/langue.module#LangueModule' },
            {path:'author', loadChildren: 'app/pages/author/author.module#AuthorModule' },
            {path:'edition', loadChildren: 'app/pages/edition/edition.module#EditionModule' },
            {path: 'search', loadChildren: 'app/pages/search/search.module#SearchModule'}
        ]
    },
];

export const PagesRouting : ModuleWithProviders = RouterModule.forRoot(routes);