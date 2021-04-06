import {NgModule} from '@angular/core';
import {BodyGeneratorComponent} from './body-generator.component';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComponentsPanelModule} from '../../others/components-panel/components-panel.module';
import {ObjectTypeComponent} from './object-type/object-type.component';
import {HttpClientModule} from '@angular/common/http';
import {NameDirective} from '../../shared/name.directive';
import {ExampleDirective} from '../../shared/example.directive';
import {EnumToArrayPipe} from "../../pipes/enum-to-array.pipe";
import {BodyGeneratorRoutingModule} from "./body-generator-routing.module";
import {ThemeModule} from "../../../@theme/theme.module";

@NgModule({
  declarations: [
    BodyGeneratorComponent,
    EnumToArrayPipe,
    ObjectTypeComponent,
    NameDirective,
    ExampleDirective
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
    BodyGeneratorRoutingModule,
    ThemeModule
  ],
  providers: [],
  exports: [
    BodyGeneratorComponent
  ],
})
export class BodyGeneratorModule {
}
