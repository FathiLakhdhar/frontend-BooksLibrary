import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';



const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full',
        children:[]
    },
];

export const DashboardRouting = RouterModule.forRoot(routes);