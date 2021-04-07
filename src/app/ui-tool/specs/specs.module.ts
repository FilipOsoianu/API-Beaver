import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import { SpecsRoutingModule} from "./specs-routing.module";
import {SpecsComponent} from "./specs.component";
import {SpecsListComponent} from './specs-list/specs-list.component';
import {SpecComponent} from './spec/spec.component';
import {AddSpecComponent} from './add-spec/add-spec.component';
import {ThemeModule} from "../../@theme/theme.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {SpecsService} from "./specs.service";
import {BodyGeneratorModule} from "./body-generator/body-generator.module";
import {ResponseGeneratorModule} from "./response-generator/response-generator.module";


@NgModule({
  declarations: [
    SpecsComponent, SpecsListComponent, SpecComponent, AddSpecComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    ThemeModule,
    Ng2SmartTableModule,
    SpecsRoutingModule,
    BodyGeneratorModule,
    ResponseGeneratorModule,
    NbTabsetModule
  ],
  providers: [SpecsService],
  exports: [],
})
export class SpecsModule {
}
