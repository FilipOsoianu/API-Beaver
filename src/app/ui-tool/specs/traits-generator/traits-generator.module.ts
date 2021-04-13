import {NgModule} from '@angular/core';
import {TraitsGeneratorComponent} from "./traits-generator.component";
import {ThemeModule} from "../../../@theme/theme.module";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsPanelModule} from "../../others/components-panel/components-panel.module";
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from "@nebular/theme";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {BodyGeneratorModule} from "../body-generator/body-generator.module";
import {SpecsModule} from "../specs.module";
import {SharedModule} from "../../shared/shared.module";
import {QueryParamComponent} from "./query-param/query-param.component";


@NgModule({
  declarations: [
    TraitsGeneratorComponent,
    HeaderComponent,
    QueryParamComponent
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
    TraitsGeneratorComponent
  ],
})
export class TraitsGeneratorModule {
}
