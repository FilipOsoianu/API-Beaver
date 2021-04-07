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

@NgModule({
  declarations: [
    TraitsGeneratorComponent
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
    ThemeModule
  ],
  providers: [],
  exports: [
    TraitsGeneratorComponent
  ],
})
export class TraitsGeneratorModule {
}
