import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { ItemMenuComponent } from './item-menu.component';
import { PagesModule } from './pages/pages.module';
import { Angular2MaterialModules,Angular2MaterialProviders } from './angular2-material.module';
import { ng2BootstrapModules,ng2BootstrapProviders } from './ng2-bootstrap.module';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,JsonpModule,
    Angular2MaterialModules,ng2BootstrapModules,
    PagesModule,
    AppRouting,
    
  ],
  providers: [Angular2MaterialProviders, ng2BootstrapProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
