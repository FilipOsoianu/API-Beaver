import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ResourceTypeRoutingModule} from "./resource-type-routing.module";
import {ThemeModule} from "../../../@theme/theme.module";
import {ResourceTypeComponent} from "./resource-type.component";



@NgModule({
  declarations: [
    ResourceTypeComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ThemeModule,
    Ng2SmartTableModule,
    ResourceTypeRoutingModule,
    NbTabsetModule
  ],
  providers: [],
  exports: [
    ResourceTypeComponent
  ],
})
export class ResourceTypeModule {
}
