import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ThemeModule} from '../@theme/theme.module';
import {UiToolLayoutComponent} from './ui-tool-layout.component';
import {routing} from './ui-tool.routing';
import {SpecsComponent} from "./specs/specs.component";
import {SpecsListComponent} from "./specs/specs-list/specs-list.component";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    routing,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    UiToolLayoutComponent,
    SpecsComponent,
    SpecsListComponent,
    SpecsComponent
  ],
  providers: [],
})
export class UiToolModule {
}
