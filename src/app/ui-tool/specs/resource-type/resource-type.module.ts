import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule, NbIconModule,
  NbInputModule,
  NbLayoutModule, NbSelectModule,
  NbTabsetModule
} from '@nebular/theme';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ResourceTypeRoutingModule} from "./resource-type-routing.module";
import {ThemeModule} from "../../../@theme/theme.module";
import {ResourceTypeComponent} from "./resource-type.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {ComponentsPanelModule} from "../../others/components-panel/components-panel.module";
import {HttpClientModule} from "@angular/common/http";
import {MethodComponent} from "./method/method.component";


@NgModule({
  declarations: [
    ResourceTypeComponent,
    MethodComponent
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    NbSelectModule,
    CommonModule,
    FormsModule,
    ComponentsPanelModule,
    NbIconModule,
    HttpClientModule,
    ThemeModule,
    SharedModule,
  ],
  providers: [],
  exports: [
    ResourceTypeComponent
  ],
})
export class ResourceTypeModule {
}
