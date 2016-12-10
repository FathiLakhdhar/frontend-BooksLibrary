import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { AuthorRouting } from './author.routing';
import { ng2BootstrapModules,ng2BootstrapProviders } from '../../ng2-bootstrap.module';
import { Angular2MaterialModules,Angular2MaterialProviders } from '../../angular2-material.module';

import { SearchPipe } from '../search.pipe';


@NgModule({
  imports: [
    CommonModule,
    ng2BootstrapModules,Angular2MaterialModules,
    AuthorRouting,
  ],
  declarations: [AuthorComponent,SearchPipe],
  providers: [Angular2MaterialProviders]
})
export class AuthorModule { }
