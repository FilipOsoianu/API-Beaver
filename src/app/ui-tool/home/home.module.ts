import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import {ThemeModule} from "../../@theme/theme.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ThemeModule,
    Ng2SmartTableModule,
    HomeRoutingModule,
    NbTabsetModule
  ],
  providers: [],
  exports: [],
})
export class HomeModule {
}
