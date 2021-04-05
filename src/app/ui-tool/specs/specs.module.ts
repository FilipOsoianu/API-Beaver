import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule} from '@nebular/theme';
import {SpecsRoutingModule} from "./specs-routing.module";
import {SpecsComponent} from "./specs.component";
import {SpecsListComponent} from './specs-list/specs-list.component';
import {SpecComponent} from './spec/spec.component';
import {AddSpecComponent} from './add-spec/add-spec.component';
import {ThemeModule} from "../../@theme/theme.module";


@NgModule({
  declarations: [
    AddSpecComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    SpecsRoutingModule,
    ThemeModule,

  ],
  providers: [SpecsComponent, SpecsListComponent, SpecComponent, AddSpecComponent],
  exports: [],
})
export class SpecsModule {
}
