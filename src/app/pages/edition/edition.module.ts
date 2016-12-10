import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition.component';
import { EditionRouting } from './edition.routing';
import { ng2BootstrapModules,ng2BootstrapProviders } from '../../ng2-bootstrap.module';
import { Angular2MaterialModules,Angular2MaterialProviders } from '../../angular2-material.module';
import {SelectModule} from 'angular2-select';

@NgModule({
  imports: [
    CommonModule,
    ng2BootstrapModules,Angular2MaterialModules,SelectModule,
    EditionRouting
  ],
  declarations: [EditionComponent],
  providers:[Angular2MaterialProviders]
})
export class EditionModule { }
