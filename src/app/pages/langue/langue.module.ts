import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LangueComponent} from './langue.component'
import {LangueRouting} from './langue.routing';
import { ng2BootstrapModules,ng2BootstrapProviders } from '../../ng2-bootstrap.module';
import { Angular2MaterialModules,Angular2MaterialProviders } from '../../angular2-material.module';
@NgModule({
  imports: [
    CommonModule,
    ng2BootstrapModules,Angular2MaterialModules,
    LangueRouting,
  ],
  declarations: [ LangueComponent,  ],
  providers: [Angular2MaterialProviders]
})
export class LangueModule { }
