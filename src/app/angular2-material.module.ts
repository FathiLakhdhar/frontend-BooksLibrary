
import { MdButtonModule } from '@angular2-material/button/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle/button-toggle';
import { MdInputModule } from '@angular2-material/input/input';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdIconModule,MdIconRegistry } from '@angular2-material/icon/icon';
import {MdMenuModule} from '@angular2-material/menu';
import {MdCardModule,} from '@angular2-material/card';
import 'hammerjs';

export const Angular2MaterialModules = [

    MdButtonModule,MdButtonToggleModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdMenuModule,
    MdCardModule
    ];
export const Angular2MaterialProviders = [MdIconRegistry];