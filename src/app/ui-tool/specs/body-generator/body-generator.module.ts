import {NgModule} from '@angular/core';
import {BodyGeneratorComponent} from './body-generator.component';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule
} from '@nebular/theme';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ObjectTypeComponent} from './object-type/object-type.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EnumToArrayPipe} from "../../pipes/enum-to-array.pipe";
import {BodyGeneratorRoutingModule} from "./body-generator-routing.module";
import {ThemeModule} from "../../../@theme/theme.module";
import {NbAuthJWTInterceptor} from "@nebular/auth";
import {SpecsModule} from "../specs.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    BodyGeneratorComponent,
    ObjectTypeComponent,
  ],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbContextMenuModule,
    NbSelectModule,
    CommonModule,
    FormsModule,
    NbIconModule,
    HttpClientModule,
    BodyGeneratorRoutingModule,
    ThemeModule,
    SharedModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true }],
  exports: [
    BodyGeneratorComponent,
  ],
})
export class BodyGeneratorModule {
}
