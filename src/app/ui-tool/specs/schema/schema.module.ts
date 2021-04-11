import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {SchemaRoutingModule} from "./schema-routing.module";
import {ThemeModule} from "../../../@theme/theme.module";
import {SchemaComponent} from "./schema.component";



@NgModule({
  declarations: [
    SchemaComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ThemeModule,
    Ng2SmartTableModule,
    SchemaRoutingModule,
    NbTabsetModule
  ],
  providers: [],
  exports: [
    SchemaComponent
  ],
})
export class SchemaModule {
}
